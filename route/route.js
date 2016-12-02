var message = require('../message/message');
var BlogRoute = require('./BlogRoute');

function route(req, res) {
  var context = {
    message: message,
    res: res,
    req: req
  };

  if (req.method === 'GET' && req.url.indexOf('/blog/') >= 0) {
    var blog = new BlogRoute(context);

    blog.route();
  }
}

module.exports = route;
