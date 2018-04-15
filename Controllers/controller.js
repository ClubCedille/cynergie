'use strict';
const axios = require("axios");


/**
 * get json form prometheus API et process the data
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
exports.getDataByDay = function(req, res) {
var date = req.params.date;
axios
  .get("http://localhost:9090/api/v1/query_range?query=probe_http_duration_seconds&start="+date+"T00:00:00.781Z&end="+date+"T23:59:59.781Z&step=1m")
  .then(function (response) {

  	var  array = '';
  	for (var i = 0; i < response.data.data.result.length; i++) {
    	var metrics = response.data.data.result[i];
    	console.log(metrics.metric);
    	array += JSON.stringify(metrics.metric);
	};
	res.send(array);
  	//res.send(response.data.data.result[0].metric);
  })
  .catch(error => {
    console.log(error);
  });
};
