
//App.Router.map(function(){
//    this.resource('login', {path:'/'});
//});
//
//App.IndexRoute = Ember.Route.extend({
//    model: function() {
//        console.log("Index model");
//        return ['red', 'yellow', 'blue'];
//    }
//});


App.Router.map(function(){
    this.resource('login', {path:'/'});
});

//App.IndexRoute = Ember.Route.extend({
//    model: function() {
//        console.log("Index model");
//        return ['red', 'yellow', 'blue'];
//    }
//});

App.LoginRoute = Ember.Route.extend({
    model: function() {
        console.log("login model");
        return ['red', 'yellow', 'blue'];
    }
});





