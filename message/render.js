var fs = require('fs');
var path = require('path');

function render(req, res, http) {
  var fullPath = path.join(__dirname, '../') + req.path;

  fs.readFile(fullPath, 'utf-8', function fileText(err, text) {
    var content = {
      response: http.template ? http.template(text, req.data) : text,
      type: req.type
    };

    http.handler(err, res, content);
  });
}

module.exports = render;
