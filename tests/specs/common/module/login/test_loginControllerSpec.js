describe("LoginController-unit_test ", function() {

    var loginController;

    beforeEach(function() {

        loginController = App.LoginController.create();
    });

    it("Alert should display if username or password is empty", function() {

//        spyOn(window, 'alert');
//        loginController.onLogin();
//        expect(window.alert).toHaveBeenCalled();
    });

    it("validate should call for valid username or password", function() {

        loginController.set('username', 'user' );
        loginController.set('password', 'pass');
        spyOn(loginController, 'validateUser');
        loginController.onLogin();
        expect(loginController.validateUser).toHaveBeenCalled();
    });

});
