const express = require('express');
const morgan = require('morgan');
const path = require('path');
const parser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(parser.json());

app.use('/restaurants/90976/', routes);

app.use('/', express.static(path.join(__dirname, '../client')));
app.use('/', express.static(path.join(__dirname, '../public')));

const port = 3005;

app.listen(port, () => {});

module.exports = app;
