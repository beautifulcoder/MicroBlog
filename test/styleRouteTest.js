var roast = require('roast.it');
var StyleRoute = require('../route/styleRoute');

var RenderMock = require('./mock/renderMock');

roast.it('Render style with path', function renderStyleWithPath() {
  var render = new RenderMock();
  var req = { url: 'http://localhost/style/test.css' };
  var route = new StyleRoute({ message: render, res: 'res', req: req });

  route.route();

  return render.hasRenderBeenCalled && render.requestPath === 'style/test.css';
});
