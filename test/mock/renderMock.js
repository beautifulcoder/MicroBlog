var RenderMock = function RenderMock() {
  this.hasRenderBeenCalled = false;

  this.hasRequestProperties = false;
  this.hasEngineProperties = false;
  this.hasResProperties = false;

  this.requestPath = '';
};

RenderMock.prototype.render = function render(request, res, engine) {
  if (request) {
    this.hasRequestProperties = true;
    this.requestPath = request.path;
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
