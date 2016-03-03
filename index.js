var Q = require('q');
var config = require('config');
var googl = require('goo.gl');
googl.setKey(config.get('googl.auth'));

var shorten = function(url) {
  var deferred = Q.defer();
  // Shorten a long url and output the result
  googl.shorten(url)
  .then(function (shortUrl) {
    deferred.resolve(shortUrl);
  })
  .catch(function (err) {
    deferred.reject(err);
  });
  return deferred.promise;
}
exports.shorten = shorten;
