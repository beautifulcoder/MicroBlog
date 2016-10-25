var StyleRoute = function StyleRoute(context) {
  this.res = context.res;
  this.req = context.req;
  this.message = context.message;
};

StyleRoute.prototype.route = function route() {
  var url = this.req.url;
  var index = url.indexOf('/style/') + 1;

  var request = {
    path: url.slice(index),
    type: 'text/css; charset=utf-8'
  };

  var engine = {
    handler: this.message.handler
  };

  this.message.render(request, this.res, engine);
};

module.exports = StyleRoute;
