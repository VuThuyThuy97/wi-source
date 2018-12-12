let componentName = 'navigation';
let moduleName = 'my-app';

function Controller(authentication, $emit, $on) {
    let self = this;
    self.isLoggedIn = false;
    $on('loggedIn', function () {
        self.update();
    })
    $on('loggedOut', function () {
        self.isLoggedIn = false;
        self.isAdmin = false;
    });
    
    this.update = function () {
        self.isLoggedIn = authentication.isLoggedIn();
        if (self.isLoggedIn) {
            self.username = authentication.getCurrentUser();
            self.isAdmin = self.username == 'admin' ? true : false;;

            console.log('username', self.username);
        }
    }


    self.update();

    this.logout = function () {
        authentication.logout();
        self.isLoggedIn = false;
    }
}

let app = angular.module(moduleName);
app.component(componentName, {
    templateUrl: './client/components/navigation/navigation-template.html',
    controller: Controller,
    controllerAs: componentName
});
