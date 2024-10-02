var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'luciano.oliveira9603@gmail.com',
        pass: '********'
    }
});

var mailOptions = {
    from: 'luciano.oliveira9603@gmail.com',
    to: 'luciano.oliveira96@yahoo.com.br',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    })