angular.module('my-app').controller("loginCtrl", loginCtrl);

function loginCtrl($location, $timeout, authentication, $on, $emit) {
    let self = this;
    self.formError = ""
    self.user = {
        username: "",
        password: ""
    }
    self.login = function () {
        console.log('login');
        if (!self.user.username || !self.user.password) {
            self.formError = "All fields required, please try again!";
        } else {
            self.doLoggin()
        }
    };

    self.doLoggin = function () {

        authentication.login(self.user, function (err) {
            if(err) {
                self.formError = 'there were an err';
            } else {
                $location.path('/');
            }
        })
    }
}