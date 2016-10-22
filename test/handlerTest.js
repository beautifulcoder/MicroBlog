var roast = require('roast.it');
var handler = require('../message/handler');
var Response = require('./mock/responseMock');

roast.it('Handler responds with errors', function handlerRespondsWithErrors() {
  var res = new Response();

  handler({ message: 'error' }, res);

  return res.result === '500;text/plain; charset=utf-8;Error: error';
});

roast.it('Handler responds with content', function handlerRespondsWithContent() {
  var res = new Response();
  var content = { type: 'Type', response: 'Message' };

  handler(null, res, content);

  return res.result === '200;Type;Message';
});

roast.it('Handler responds with no-cache', function handlerRespondsWithNoCache() {
  var res = new Response();
  var content = { type: 'Type', response: 'Message', nocache: true };

  handler(null, res, content);

  return res.result === '200;Type;no-cache;Message';
});
