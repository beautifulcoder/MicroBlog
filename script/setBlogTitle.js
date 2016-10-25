function setBlogTitle(doc, titles) {
  var titleElement = titles[0];

  doc.title = titleElement.innerText;
}

if (typeof module === 'object') {
  module.exports = setBlogTitle;
}
