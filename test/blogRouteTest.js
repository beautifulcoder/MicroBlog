var roast = require('roast.it');
var BlogRoute = require('../route/blogRoute');

var MessageMock = require('./mock/messageMock');
var ResponseMock = require('./mock/responseMock');

roast.it('Read raw post with path', function readRawPostWithPath() {
  var messageMock = new MessageMock();
  var req = {
    url: 'http://localhost/blog/a-simple-test'
  };

  var route = new BlogRoute({ message: messageMock, req: req });

  route.route();

  return messageMock.readTextFileCalledWithPath === 'blog/a-simple-test.md' &&
    messageMock.hasCallback;
});

roast.it('Read post view with path', function readPostViewWithPath() {
  var messageMock = new MessageMock();
  var rawContent= 'content';

  var route = new BlogRoute({ message: messageMock });

  route.readPostHtmlView(null, rawContent);

  return messageMock.readTextFileCalledWithPath !== '' &&
   route.rawContent === rawContent &&
   messageMock.hasCallback;
});

roast.it('Return 404 when post not found', function return404WhenNotFound() {
  var responseMock = new ResponseMock();

  var route = new BlogRoute({ res: responseMock });

  route.readPostHtmlView({}, null);

  return responseMock.result.indexOf('404') >= 0;
});

roast.it('Respond with full post', function respondWithFullPost() {
  var messageMock = new MessageMock();
  var responseMock = new ResponseMock();

  var route = new BlogRoute({ message: messageMock, res: responseMock });

  route.renderPost(null, '');

  return responseMock.result.indexOf('200') >= 0;
});

roast.it('Return 500 when internal error', function return500WhenError() {
  var responseMock = new ResponseMock();

  var route = new BlogRoute({ res: responseMock });

  route.renderPost({}, null);

  return responseMock.result.indexOf('500') >= 0;
});
