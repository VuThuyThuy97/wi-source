(function () {
    angular.module('my-app').controller("infoCtrl", infoCtrl);

    function infoCtrl(apiService, $stateParams, ModalService, dialogUtils) {
        let self = this;
        console.log('aa');
        this.onInit = function () {
t
        }
        apiService.getProductInfo($stateParams.idProduct).then(function (info) {
            console.log('info', info);
            self.product = info.data.content
        })
        this.getBvtvInfo = function (bvtv) {
            dialogUtils.openBvtvModal(bvtv.buying_pesticide)
        }
        this.getPhanInfo = function (phan) {
            dialogUtils.openPhanModal(phan.buying_fertilizer)
           
        }
    }
})();