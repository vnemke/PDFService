const express = require('express');
require('dotenv').config();
const app = express();

const apiRouter = require('./src/api/router/api.routes');

const port = 3000;

app.get("/", (req, res) => {
    res.send("hello");
})

app.use(express.json());

app.use('/api', apiRouter);


app.listen(port, () => console.log("listening on port" + port))