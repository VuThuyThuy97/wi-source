const componentName = 'navigation';
const moduleName = 'my-app';

function Controller(authentication, $emit, $on) {
    let self = this;
    $on('loggedIn', function () {
        self.update();
    })
    this.update = function () {
        self.isLoggedIn = authentication.isLoggedIn();
        if(self.isLoggedIn) {
            self.username = authentication.curUser;
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
