const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key:'39231792996a4b22b4659247ebf21499-468bde97-6f321701', 
        domain:'sandboxf64b27db74384d4ab765ef0666e90a18.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: 'birukayalew3.62@gmail.com', // TODO replace this with your own email
        to: email, // TODO: the receiver email has to be authorized for the free tier
        subject,
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

module.exports = sendMail