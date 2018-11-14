(function () {
    angular.module('my-app').controller("infoCtrl", infoCtrl);

    function infoCtrl(apiService) {
        let self = this;
        console.log('aa');
        this.onInit = function () {

        }
        apiService.getProductInfo(apiService.idProduct).then(function(info) {
            console.log('info', info);
            self.product = info.data.content
        })
    }
})();