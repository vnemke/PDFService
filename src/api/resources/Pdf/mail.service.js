const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const fsPromises = require('fs').promises;
const path = require('path');

const mg = mailgun.client({ username: 'api', key:process.env.MAILGUN_API, url:'https://api.eu.mailgun.net' });

async function sendAttachment(petCase, pdfName) {
    const filepath = path.resolve(pdfName);
    var domain = "nemanja-vukmirovic.me";
    let messageParams = {
        from: "<no-replay@nemanja-vukmirovic.me>",
        to: petCase.Pet.Owner.Email,
        subject: "Test subject",
        text: "Hello here is a file in the attachment"
    }

    fsPromises.readFile(filepath)
    .then(data => {
        const file = {
            filename: 'receipt-'+petCase.Pet.Name,
            data
        }
        messageParams.attachment = file;
        return mg.messages.create(domain, messageParams);
    })
    .then(response => {
        console.log(response);
    })
}

module.exports = sendAttachment;