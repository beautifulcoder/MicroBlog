var MessageMock = function MessageMock() {
  this.readTextFileCalledWithPath = '';
  this.hasCallback = false;
};

MessageMock.prototype.readTextFile = function readTextFile(path, callback) {
  this.readTextFileCalledWithPath = path;

  if (typeof callback === 'function') {
    this.hasCallback = true;
  }
};

MessageMock.prototype.marked = function marked() {
  return '';
};

MessageMock.prototype.mustacheTemplate = function mustacheTemplate() {
  return '';
};

module.exports = MessageMock;
