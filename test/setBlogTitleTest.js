var roast = require('roast.it');
var blogTitle = require('../script/setBlogTitle');

roast.it('Set blog setBlogTitle', function setBlogTitle() {
  var titles = [{ innerText: 'test title' }];
  var doc = { title: '' };

  blogTitle(doc, titles);

  return doc.title === 'test title';
});
