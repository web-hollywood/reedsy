nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'test.test@gmail.com',
    pass: 'tech_proficient'
  }
});
module.exports = transporter;