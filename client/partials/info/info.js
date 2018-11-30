(function () {
    angular.module('my-app').controller("infoCtrl", infoCtrl);

    function infoCtrl(apiService, $stateParams) {
        let self = this;
        console.log('aa');
        this.onInit = function () {

        }
        apiService.getProductInfo($stateParams.idProduct).then(function(info) {
            console.log('info', info);
            self.product = info.data.content
        })
    }
})();