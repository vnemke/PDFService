const router = require('express').Router();
const pdfRouter = require('../resources/Pdf/pdf.controller');

router.use('/pdf', pdfRouter);

module.exports = router