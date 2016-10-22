var BlogRoute = require('./BlogRoute');

function route(req, res) {
  var message = require('../message/message');

  if (req.method === 'GET' && req.url.indexOf('/blog/') >= 0) {
    var blog = new BlogRoute({ message: message, res: res, req: req });

    blog.route();
  }
}

module.exports = route;
