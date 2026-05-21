import crypto from 'crypto';
import { Logger } from '@src/libs/logger';
import config from '@src/configs/app.config';

export const verifyCustomerIOSignatureMiddleware = (
  req,
  res,
  next
) => {
  try {
    const signatureHeader = req.headers['x-cio-signature'];
    const timestampHeader = req.headers['x-cio-timestamp'];

    if (!signatureHeader || !timestampHeader) {
      Logger.warn('CustomerIO signature headers missing');
      return res.status(401).json({ message: 'Invalid signature' });
    }

    const timestamp = Number(timestampHeader);
    if (Number.isNaN(timestamp)) {
      return res.status(401).json({ message: 'Invalid timestamp' });
    }

    const rawBody = req.rawBody;
    if (!rawBody) {
      Logger.error('Raw body not available for CustomerIO webhook');
      return res.status(500).json({ message: 'Server misconfiguration' });
    }

    const signingSecret = config.get('customerIo.secrectSigningKey')
    
    const baseString = `v0:${timestamp}:${rawBody.toString('utf-8')}`;

    const computedSignature = crypto
      .createHmac('sha256', signingSecret)
      .update(baseString)
      .digest('hex');

    const receivedSignatureBuffer = Buffer.from(signatureHeader, 'hex');
    const computedSignatureBuffer = Buffer.from(computedSignature, 'hex');

    if (
      receivedSignatureBuffer.length !== computedSignatureBuffer.length ||
      !crypto.timingSafeEqual(
        receivedSignatureBuffer,
        computedSignatureBuffer
      )
    ) {
      Logger.warn('CustomerIO signature mismatch', {
        expected: computedSignature,
        received: signatureHeader,
      });
      return res.status(401).json({ message: 'Invalid signature' });
    }


    console.log('CustomerIO signature verified successfully', {
      timestamp,
      event: req.body?.event_name || req.body?.event,
      path: req.originalUrl,
    });

    next();
  } catch (error) {
    Logger.error(error, 'CustomerIO signature verification failed');
    return res.status(500).json({ message: 'Signature verification error' });
  }
};