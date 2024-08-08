import nodemailer from "nodemailer";
import "dotenv/config";

const { UKR_NET_PASS, EMAIL_FROM } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_FROM,
    pass: UKR_NET_PASS,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendFeedbackEmail = (data) => {
  const email = { ...data, from: EMAIL_FROM };
  return transport.sendMail(email);
};

export default sendFeedbackEmail;
