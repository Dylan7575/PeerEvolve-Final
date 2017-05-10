/**
 * Created by dylanlafrenz on 5/9/17.
 */
var refreshable = require("express-route-refresh");

module.exports = function(app) {

  var refresh_middleware = [
    refreshable(app, '/api', './api.js')
  ];
  // now /api is registered

  // you can refresh just one
  app.use('/refresh', function(req, res, next) {
    // notice: require is synchronous... so this will be!!
    refresh_middleware.forEach(function(v) {
      v(); // do not send params if you are going to refresh more than one
    });
    res.send('ok');
  });
}
