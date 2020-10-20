//beer Cachaça caraio

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BeerSchema = new Schema({
	nome: {type: String, required: true, trim: true},
	quantidade: Number,
	valor : Number
});

//documenting exports
module.exports = mongoose.model('Beer', BeerSchema);

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
