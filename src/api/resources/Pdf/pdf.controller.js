const router = require('express').Router();
const pdfService = require('./pdf.service');

router.post('/', pdfService.addPdf);

module.exports = router;