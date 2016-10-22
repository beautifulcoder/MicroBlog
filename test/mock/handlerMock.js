var HandlerMock = function HandlerMock() {
  this.hasHandlerBeenCalled = false;
};

HandlerMock.prototype.handler = function handler(err, postContent) {
  if (err && postContent) {
    this.hasHandlerBeenCalled = true;
  }
};

module.exports = HandlerMock;
