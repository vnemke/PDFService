const puppeteer = require('puppeteer');
const pdfTempGenerate = require('../../utils/generateReceiptTemplate');
const sendAttachment = require('./mail.service')

async function printPDF(htmlTemp, caseDetails) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setContent(htmlTemp);
    await page.emulateMediaType('screen');
    var date = Date.now()
    var pdfName = 'downloads/pdf/receipt-'+caseDetails.Pet.Name+'-'+date+'.pdf';
    const pdf =  await page.pdf({ path: pdfName, printBackground: true});

    await sendAttachment(caseDetails, pdfName);

    await browser.close();
    return pdf;
}

const addPdf = async(req, res) => {
    try {
        var htmlTemp = pdfTempGenerate(req.body);
        await printPDF(htmlTemp, req.body);
        res.send();
    } catch (error) {
        res.status(400).send();
    }
}

module.exports = {
    addPdf
}