var render = require('./render');
var handler = require('./handler');
var mustacheTemplate = require('./mustacheTemplate');
var readPost = require('./readPost');

module.exports = {
  render: render,
  handler: handler,
  mustacheTemplate: mustacheTemplate,
  readPost: readPost
};
