var fs = require('fs');
var path = require('path');
var marked = require('marked');

function readPost(postPath, postRender) {
  var fullPath = path.join(__dirname, '../') + postPath + '.md';

  fs.readFile(fullPath, 'utf-8', function postContent(err, text) {
    var content = {
      postContent: marked(text)
    };

    postRender(err, content);
  });
}

module.exports = readPost;
