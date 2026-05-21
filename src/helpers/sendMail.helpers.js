import Logger from "@src/libs/logger";
import sgMail from "@sendgrid/mail";
import config from "../configs/app.config";
import db from "../db/models";
import Jwt from "jsonwebtoken";

sgMail.setApiKey(config.get("sendGrid.apiKey"));
export const sendMail = async (to, templateName, dynamicTemplateData) => {
  try {
    const siteSetting = await db.GlobalSetting.findOne({
      where: { key: "SITE_INFORMATION" },
    });

    (dynamicTemplateData.companyName = siteSetting.value.siteName),
      (dynamicTemplateData.companyLogo = siteSetting.value.mobile),
      (dynamicTemplateData.supportEmail = siteSetting.value.supportEmail),
      (dynamicTemplateData.helpCenterLink = siteSetting.value.supportEmail),
      (dynamicTemplateData.year = new Date().getFullYear());

    if (!to || !templateName || !dynamicTemplateData) {
      throw new Error("Missing required email parameters");
    }

    const emailTemplate = await db.EmailTemplate.findOne({
      where: { label: templateName },
    });

    if (!emailTemplate) {
      throw new Error("Email template not found");
    }

    const recipients = Array.isArray(to) ? to : [to];

    const msg = {
      to: recipients,
      from: {
        name: dynamicTemplateData.companyName,
        email: config.get("sendGrid.senderEmail"),
      },
      templateId: emailTemplate.templateProviderId,
      dynamicTemplateData: dynamicTemplateData,
    };

    const response = await sgMail.send(msg);
    if (response[0].statusCode !== 202) return false
    return { response };
  } catch (error) {
    throw error;
  }
};

export const generateOTP = async () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const generateVerifyToken = async (payload, tokenKey, tokenExpiry) => {
  return Jwt.sign({ userId: payload }, tokenKey, { expiresIn: tokenExpiry });
};