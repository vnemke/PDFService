const puppeteer = require('puppeteer');
const pdfTemp = require('../../utils/generateReceiptTemplate');
// fs = require('fs');


async function printPDF(htmlTemp) {
    // fs.writeFile('helloworld.txt',  htmlTemp, function (err) {
    //     if (err) return console.log(err);
    // });
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setContent(htmlTemp);
    await page.emulateMediaType('screen');
    const pdf =  await page.pdf({ path: 'downloads/pdf/test.pdf', printBackground: true});

    await browser.close();
    return pdf
}

const addPdf = async(req, res) => {
    try {
        var htmlTemp = pdfTemp(req.body);
        await printPDF(htmlTemp);
        res.send('test pdf');
    } catch (error) {
        res.status(400).send();
    }
}

module.exports = {
    addPdf
}