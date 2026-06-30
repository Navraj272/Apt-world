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

export const sendEnquiryNotification = async (enquiry, files = []) => {
  const notificationEmail = config.get('smtp.notificationEmail');

  let subject = 'New Enquiry - APT World';
  if (enquiry.type === 'product' && enquiry.product) {
    const productName = (enquiry.product.name && enquiry.product.name.en) || enquiry.product.baseCode || '';
    subject = `New Enquiry: ${productName} - APT World`;
  } else if (enquiry.type === 'rental') {
    subject = 'New Rental Enquiry - APT World';
  } else if (enquiry.type === 'franchise_product') {
    subject = 'New Franchise Product Enquiry - APT World';
  }

  // Rental enquiries always stay superadmin-only. Franchise product enquiries
  // also notify the selected franchise, when one is on record.
  const recipients = [notificationEmail];
  if (enquiry.type === 'franchise_product' && enquiry.franchiseLocation && enquiry.franchiseLocation.email) {
    recipients.push(enquiry.franchiseLocation.email);
  }

  const attachments = files.map((file) => ({
    filename: file.originalname,
    path: file.path,
  }));

  try {
    await transporter.sendMail({
      from: `"APT World" <${config.get('smtp.user')}>`,
      to: recipients,
      subject,
      html: enquiryEmailHtml(enquiry, attachments.length),
      attachments,
    });
  } catch (error) {
    console.error('Failed to send notification email:', error.message);
  }
};
