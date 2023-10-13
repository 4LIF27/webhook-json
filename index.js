const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.post("/", (request, response) => {
    const amount = request.body.amount_raw;
    const donorName = request.body.donator_name;

    console.log("Donasi Dari: " + donorName);
    console.log("Donasi Sebesar: " + amount);
    const data = {
        nama: donorName,
        donate: amount,};
    const jsonData = JSON.stringify(data);
    fs.writeFileSync('donasi.json', jsonData);
    response.status(200).send("Success");
});

app.listen(PORT, () => console.log("Program Berjalan Pada Port: " + PORT));





