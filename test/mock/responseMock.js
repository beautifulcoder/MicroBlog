var Response = function Response() {
  this.result = '';
};

Response.prototype.writeHead = function writeHead(returnCode) {
  this.result += returnCode + ';';
};

Response.prototype.end = function end(body) {
  this.result += body;
};

module.exports = Response;
