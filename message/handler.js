var errorCode = 500;
var okCode = 200;

function handler(err, res, content) {
  if (err) {
    res.writeHead(errorCode, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Error: ' + err.message);
  } else {
    var headers = { 'Content-Type': content.type };

    res.writeHead(okCode, headers);
    res.end(content.response);
  }
}

module.exports = handler;
