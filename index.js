'use strict';
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3008;

/**
 * import route 
 */
var routes = require('./routes/route'); 
routes(app); 
app.listen(port);
console.log('Cynergie RESTful API server started on: ' + port);