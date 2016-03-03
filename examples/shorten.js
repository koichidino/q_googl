var qGoogl = require('../index');

var url = 'https://www.youtube.com';

qGoogl(url)
.then(function(shortenUrl) {
  console.log(shortenUrl);
})
.fail(function(e) {
  console.error(e.stack);
})
