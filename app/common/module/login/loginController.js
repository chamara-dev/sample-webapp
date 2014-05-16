App.LoginController = Ember.ObjectController.extend({
        username:'username',
        password:'',

        onLogin: function() {

            var _username = this.get('username'),
                _password = this.get('password');
            if(Ember.isEmpty(_username) || Ember.isEmpty(_password)){

                alert('Please enter valid input');
                document.title = "Error Page";
            }
            else{
                this.validateUser(_username, _password);
                document.title = "Market Summary";
            }
        },
        onFreeAccount:function(){
            alert("onFreeAccount");
        },
        validateUser:function(_username, _password){

        }
    }
);


//App.LoginController.reopen({
//    onFreeAccount:function(){
//        //ABD
//        this._super();
//    }
//});