var ReadPostMock = function ReadPostMock() {
  this.readPostCalledWithPath = '';
  this.hasReadPostCallback = false;
};

ReadPostMock.prototype.readPost = function readPost(path, callback) {
  this.readPostCalledWithPath = path;

  if (callback) {
    this.hasReadPostCallback = true;
  }
};

module.exports = ReadPostMock;
