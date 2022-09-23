const express = require('express')
const app = express()
const port = 3000
const csvToJson = require('convert-csv-to-json');

let json = csvToJson.getJsonFromCsv("LE.csv");

app.get('/', (req, res) => {
    var results = [];

    for(let i=0; i<10;i++){
        console.log(json[i]);
        results.push(json[i]);

    }
res.send(results);


})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})