import nodemailer from 'nodemailer';
import config from '../configs/app.config';
import { enquiryEmailHtml } from './emailTemplates';

const transporter = nodemailer.createTransport({
  host: config.get('smtp.host'),
  port: config.get('smtp.port'),
  secure: config.get('smtp.port') === 465,
  auth: {
    user: config.get('smtp.user'),
    pass: config.get('smtp.pass'),
  },
});

export const sendEnquiryNotification = async (enquiry) => {
  const notificationEmail = config.get('smtp.notificationEmail');

  let subject = 'New Enquiry - APT World';
  if (enquiry.type === 'product' && enquiry.product) {
    const productName = (enquiry.product.name && enquiry.product.name.en) || enquiry.product.baseCode || '';
    subject = `New Enquiry: ${productName} - APT World`;
  } else if (enquiry.type === 'rental') {
    subject = 'New Rental Enquiry - APT World';
  }

  try {
    await transporter.sendMail({
      from: `"APT World" <${config.get('smtp.user')}>`,
      to: notificationEmail,
      subject,
      html: enquiryEmailHtml(enquiry),
    });
  } catch (error) {
    console.error('Failed to send notification email:', error.message);
  }
};
