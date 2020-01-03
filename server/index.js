const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined'));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', function (req, res) {
  res.send('hello world I am here!!!!!')
})

app.listen(3000);
