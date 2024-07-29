var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'app.html'));
});

app.get('/interface.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'interface.js'));
});

app.get('/app.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'app.css'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});