var roast = require('roast.it');

require('./handlerTest');
require('./mustacheTemplateTest');

require('./blogRouteTest');
require('./scriptRouteTest');
require('./styleRouteTest');

require('./setBlogTitleTest');

roast.run();
roast.exit();
