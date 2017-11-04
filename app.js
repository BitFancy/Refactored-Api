"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const people = require("./api/people/route.js");
const projects = require("./api/projects/route.js");
const mongoose = require('mongoose');
mongoose.set('debug', true);


//conection with default production db
mongoose.connect('mongodb://piorot2:Test123abc@ds237445.mlab.com:37445/heroku_p4nmksq9');


app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/', people);
app.use('/', projects);


module.exports = app;



