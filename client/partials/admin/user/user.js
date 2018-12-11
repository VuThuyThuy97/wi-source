(function () {
    angular.module('my-app').controller("userManagerCtrl", userManagerCtrl);

    function userManagerCtrl(apiService) {
        let self = this;
        self.users = [];
        apiService.getUserList().then(users => {
            self.users = users.data.content;
        });
        self.activeToggle = function (user) {
            if (user.status == 'Active')
                user.status = 'Inactive';
            else user.status = 'Active';
            apiService.editUser(user).then(function () { });
        }
        self.delete = function (user) {
            let index = self.users.indexOf(user);
            apiService.deleteUser(user).then(function () {
                self.users.splice(index, 1);
            })
        }
    }
})();