var roast = require('roast.it');
var BlogRoute = require('../route/blogRoute');

var ReadPostMock = require('./mock/readPostMock');
var HandlerMock = require('./mock/handlerMock');
var RenderMock = require('./mock/renderMock');

roast.it('Set blog path', function setBlogPath() {
  var readPost = new ReadPostMock();
  var req = {
    url: 'http://localhost/blog/a-simple-test'
  };
  var route = new BlogRoute({ message: readPost, req: req });

  route.route();

  return readPost.readPostCalledWithPath === 'blog/a-simple-test' &&
    readPost.hasReadPostCallback;
});

roast.it('Render post with error', function renderPostWithError() {
  var handler = new HandlerMock();
  var route = new BlogRoute({ message: handler, res: 'content' });

  route.renderPost('error');

  return handler.hasHandlerBeenCalled;
});

roast.it('Render post with content', function renderPostWithContent() {
  var render = new RenderMock();
  var route = new BlogRoute({ message: render, res: 'res' });

  route.renderPost(null, 'postContent');

  return render.hasRenderBeenCalled;
});
