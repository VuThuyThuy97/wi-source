(function () {
    angular.module('my-app').controller("historyCtrl", historyCtrl);

    function historyCtrl(apiService) {
        let self = this;
        apiService.getHistoryList().then(function(h) {
            self.histories = h.data.content;
        })
    }
})();