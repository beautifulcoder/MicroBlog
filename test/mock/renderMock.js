var RenderMock = function RenderMock() {
  this.hasRenderBeenCalled = false;

  this.hasRequestProperties = false;
  this.hasEngineProperties = false;
  this.hasResProperties = false;
  this.hasCachingOff = false;
};

RenderMock.prototype.render = function render(request, res, engine) {
  if (request) {
    this.hasRequestProperties = true;
  }

  if (request.nocache) {
    this.hasCachingOff = true;
  }

  if (res) {
    this.hasResProperties = true;
  }

  if (engine) {
    this.hasEngineProperties = true;
  }

  this.hasRenderBeenCalled = this.hasRequestProperties &&
    this.hasResProperties &&
    this.hasEngineProperties;
};

module.exports = RenderMock;
