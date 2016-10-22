var roast = require('roast.it');
var mustache = require('../message/mustacheTemplate');

roast.it('Template with values', function templateWithValues() {
  var template = 'some {{template}} with {{value}}';

  var result = mustache(template, { template: 'template', value: 'value' });

  return result === 'some template with value';
});

roast.it('Template with duplicate values', function templateWithDuplicates() {
  var template = 'some {{value}} with {{value}}';

  var result = mustache(template, { value: 'value' });

  return result === 'some value with value';
});

roast.it('Template with bad values', function templateWithBadValues() {
  var template = 'some {{template}} with {{value}}';

  var result = mustache(template, { bad: 'value'});

  return result === 'some {{template}} with {{value}}';
});

roast.it('Template with no values', function templateWithNoValues() {
  var template = 'some {{template}} with {{value}}';

  var result = mustache(template, { });

  return result === 'some {{template}} with {{value}}';
});
