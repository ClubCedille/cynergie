'use strict';
module.exports = function(app) {
var routePrometheus = require('../Controllers/controller');


 /**
  * routes for cynergie API
  */
app.route('/:date')
	.get(routePrometheus.getDataByDay);
};

