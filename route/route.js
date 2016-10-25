var BlogRoute = require('./BlogRoute');
var ScriptRoute = require('./ScriptRoute');
var StyleRoute = require('./StyleRoute');

function route(req, res) {
  var message = require('../message/message');

  var context = {
    message: message,
    res: res,
    req: req
  };

  if (req.method === 'GET' && req.url.indexOf('/blog/') >= 0) {
    var blog = new BlogRoute(context);

    blog.route();
  } else if (req.method === 'GET' && req.url.indexOf('/script/') >= 0) {
    var script = new ScriptRoute(context);

    script.route();
  } else if (req.method === 'GET' && req.url.indexOf('/style/') >= 0) {
    var style = new StyleRoute(context);

    style.route();
  }
}

module.exports = route;
