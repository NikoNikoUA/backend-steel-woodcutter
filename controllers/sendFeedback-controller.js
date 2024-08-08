import helpers from "../helpers/index.js";
import User from "../models/User.js";

const EMAIL_TO = "NikoNikoUA-23@meta.ua";

const feedbackMail = async (req, res) => {
  const { email, comment } = req.body;
  const result = await User.findOne({ email });
  if (!result) {
    throw helpers.HttpError(404, "User not found");
  }

  const helpEmail = {
    to: EMAIL_TO,
    subject: "Feedback email",
    html: `User <b>${email}</b> send email with comment: <b>"${comment}"</b>`,
  };
  await helpers.sendFeedbackEmail(helpEmail);

  res.json({ message: "Help email sent" });
};

export default { feedbackMail };
