import Replicate  from "replicate";
import dotenv from "dotenv"; // Import dotenv
dotenv.config();
var express = require('express');
var app = express();

var path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'app.html'));
});

app.get('/interface.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'interface.js'));
});

app.get('/app.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'app.css'));
});

// Add an API endpoint to handle user messages
app.post('/api/message', function (req, res) {
    const userMessage = req.body.message; // Extract the message 
    console.log('Received message:', userMessage);
    res.json({ response: '' }); // Send back a default response
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
