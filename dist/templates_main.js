Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<dev>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</dev>\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <li>");
  stack1 = helpers._triageMustache.call(depth0, "item", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        ");
  return buffer;
  }

  data.buffer.push("<p> index template </p>\n    <ul>\n        ");
  stack1 = helpers.each.call(depth0, "item", "in", "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
  
});

Ember.TEMPLATES["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class='login_bg'>\n    <li >");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("controller.username"),
    'placeholderBinding': ("username"),
    'autocorrect': ("off"),
    'autocapitalize': ("off"),
    'autocomplete': ("off"),
    'id': ("username")
  },hashTypes:{'valueBinding': "STRING",'placeholderBinding': "STRING",'autocorrect': "STRING",'autocapitalize': "STRING",'autocomplete': "STRING",'id': "STRING"},hashContexts:{'valueBinding': depth0,'placeholderBinding': depth0,'autocorrect': depth0,'autocapitalize': depth0,'autocomplete': depth0,'id': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</li>\n    <li>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("controller.password"),
    'placeholderBinding': ("password"),
    'type': ("password"),
    'id': ("password")
  },hashTypes:{'valueBinding': "STRING",'placeholderBinding': "STRING",'type': "STRING",'id': "STRING"},hashContexts:{'valueBinding': depth0,'placeholderBinding': depth0,'type': depth0,'id': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</li>\n    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "onLogin", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" class='button'>login</button>\n    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "onFreeAccount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" class='button'>Free Account</button>\n</div>\n");
  return buffer;
  
});