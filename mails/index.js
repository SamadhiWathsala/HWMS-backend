

// const nodemailer = require('nodemailer'),
//     transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'samadhiwathsala96@gmail.com',
//             pass: 'Admin@123'
//         }

//     }),
//     EmailTemplate = require('email-templates').EmailTemplate,
//     path = require('path'),
//     promise = require('bluebird');


// let users = [
//     {
//         name: 'Geevinda',
//         staffID: 'Staff01',
//         passsword: 'Staff01',
//         email: 'yasirunet@gmail.com'
//     },
//     {
//         name: 'Wathsala',
//         staffID: 'Staff02',
//         passsword: 'Staff02',
//         email: 'sanjunet10@gmail.com'
//     }, {
//         name: 'Lakshika',
//         staffID: 'Staff12',
//         passsword: 'Staff12',
//         email: 'lakshika9504@gmail.com'
//     }
// ]


// function sendEmail(obj) {
//     return transporter.sendMail(obj)
// }

// function loadTemplate(templateName, contexts) {
//     let template = new EmailTemplate(path.join(__dirname, 'templates', templateName));
//     return Promise.all(contexts.map((context) => {
//         return new Promise((resolve, reject) => {
//             template.render(context, (err, result) => {
//                 if (err) reject(err)
//                 else resolve({
//                     email: result,
//                     context
//                 });
//             })
//         })
//     }));
// }

// loadTemplate('welcome', users).then((results) => {
//     return Promise.all(results.map((result) => {
//         sendEmail({
//             to: result.context.email,
//             from: 'Me :)',
//             subject: result.context.subject,
//             name: result.context.name,
//             staffID: result.context.staffID,
//             passsword: result.context.passsword
//         }).then(() => {
//             console.log('send');
//         })
//     }))

// })


"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        // host: "smtp.ethereal.email",
        // port: 587,
        // secure: false, // true for 465, false for other ports
        service: 'gmail',
        auth: {
            user: 'samadhiwathsala96@gmail.com', // generated ethereal user
            pass: 'SaM@123_', // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Heloo 👻" <samadhiwathsala96@gmail.com>', // sender address
        to: "sanjunet10@gmail.com, yasirunet@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);