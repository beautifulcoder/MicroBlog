var BlogRoute = function BlogRoute(context) {
  this.res = context.res;
  this.req = context.req;
  this.message = context.message;

  this.boundRenderPost = this.renderPost.bind(this);
};

BlogRoute.prototype.route = function route() {
  var url = this.req.url;
  var index = url.indexOf('/blog/') + 1;
  var path = url.slice(index);

  this.message.readPost(path, this.boundRenderPost);
};

BlogRoute.prototype.renderPost = function renderPost(err, postContent) {
  if (err) {
    this.message.handler(err, this.res);
  } else {
    var request = {
      path: 'view/blogPost.html',
      type: 'text/html; charset=utf-8',
      nocache: true,
      data: postContent
    };

    var engine = {
      handler: this.message.handler,
      template: this.message.mustacheTemplate
    };

    this.message.render(request, this.res, engine);
  }
};

module.exports = BlogRoute;
