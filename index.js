require('dotenv').config();
const express = require("express");
const app = express();
// const port = 3000;

app.get('/', (req, res) => {
    res.send("hello World 12345!")
})

app.get('/test', (req, res) => {
    res.send("<i>Hey, there</i>");
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})