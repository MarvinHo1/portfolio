const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.sendStatus(200);
  console.log("hello")
});

app.get('/', function(req, res){
  res.sendFile(__dirname+'/bin/index.html');
});

app.listen(3000);
