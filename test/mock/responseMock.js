var Response = function Response() {
  this.result = '';
};

Response.prototype.writeHead = function writeHead(returnCode, headers) {
  this.result += returnCode + ';';

  for (var prop in headers) {
    if (headers.hasOwnProperty(prop)) {
      this.result += headers[prop] + ';';
    }
  }
};

Response.prototype.end = function end(body) {
  this.result += body;
};

module.exports = Response;
