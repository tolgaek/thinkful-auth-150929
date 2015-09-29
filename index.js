'use strict';

var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('<p>Hello world</p>');
});

app.listen(8060);
