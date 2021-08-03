const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/mobilidade-eletrica'));

app.get('/*', (req, res) => res.sendFile(__dirname + "/dist/mobilidade-eletrica/index.html"));

app.listen(process.env.PORT || 8080);
