const puppeteer = require('puppeteer');
const pdfTemp = require('../../utils/generateReceiptTemplate');

async function printPDF(htmlTemp) {
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
        var htmlTemp =
        pdfTemp({
            pet: 'Rex',
            vet: 'John Doe', 
            service: 'Surgery',
            owner:  'David Smith',
            price: 2000.00
        })
        await printPDF(htmlTemp);
        res.send('test pdf')
    } catch (error) {
        res.status(400).send();
        console.log(error); 
    }
}

module.exports = {
    addPdf
}