angular.module('my-app').service('authentication', authentication);
function authentication ($window, $http) {

    // var defaultAvatar = "avatar/default_user.png";
    var saveToken = function(token) {
        $window.localStorage['wisource-token'] = token;
    }
    var getToken = function () {
        return $window.localStorage['wisource-token'];
    }
    var login = function(user) {
        return $http.post('/auth/login', user)
                    .then(function (userdata){
                            saveToken(userdata.data.content);
                    })
    }
    var register = function(user) {
        // user.avatar = defaultAvatar;
        return $http.post('/auth/register', user)
                    .then(function(user){
                        saveToken(user.data.content);
                    })
    }
    var logout = function(){
        $window.localStorage.removeItem('wisource-token');
    }
    var isLoggedIn = function() {
        var token = getToken();
        if(token){
            // console.log('token',token)
            // var payload = JSON.parse($window.atob(token.split('.')[1]));
            // return payload.exp > Date.now() / 1000;
            return true;
        } else {
            console.log('no token');
            return false;
        }
    }
    var getCurrentUser = function () {
        if(isLoggedIn()){
            var token = getToken();
            var payload = JSON.parse($window.atob(token.split('.')[1]));
            return payload.username;
        } else {
            return "";
            console.log('please loggin');
        }
    }

    var curUser = getCurrentUser();

    return {
        login: login,
        logout: logout,
        register: register,
        getCurrentUser: getCurrentUser,
        getToken: getToken,
        isLoggedIn: isLoggedIn,
        curUser: curUser
    }
}