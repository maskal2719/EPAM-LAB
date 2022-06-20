const express = require('express');
const app = express();

app.get('/', function (req, res) {
    const request = require('request');
    request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
        let json = JSON.parse(body);
        let img = `<img style='margin:auto; width:500px;display:block' src="${json.message}">`;
        res.send(img);
    });
})

app.listen(3000)