(function () {
    angular.module('my-app').controller("historyCtrl", historyCtrl);

    function historyCtrl(apiService, dialogUtils) {
        let self = this;
        apiService.getHistoryList().then(function(h) {
            self.histories = h.data.content;
        })
        self.getHistoryDes = function (h) {
            dialogUtils.openHistoryModal();
        }
    }
})();