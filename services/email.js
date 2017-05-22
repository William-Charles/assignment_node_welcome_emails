const nodemailer = require("nodemailer");

const _transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const EmailService = {};

EmailService.send = options => {
  return new Promise((resolve, reject) => {
    _transporter.sendMail(options, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
};

module.exports = EmailService;