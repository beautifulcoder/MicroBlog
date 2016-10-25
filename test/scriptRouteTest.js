var roast = require('roast.it');
var ScriptRoute = require('../route/scriptRoute');

var RenderMock = require('./mock/renderMock');

roast.it('Render script with path', function renderScriptWithPath() {
  var render = new RenderMock();
  var req = { url: 'http://localhost/script/test.js' };
  var route = new ScriptRoute({ message: render, res: 'res', req: req });

  route.route();

  return render.hasRenderBeenCalled && render.requestPath === 'script/test.js';
});
