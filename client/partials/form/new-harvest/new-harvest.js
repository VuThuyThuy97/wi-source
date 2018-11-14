(function () {
    angular.module('my-app').controller("newHarvestCtrl", newHarvestCtrl);

    function newHarvestCtrl(apiService) {
        let self = this;
        console.log('aa');
        this.data = {
            date: "",
            idPlot: "",
            total: ""
        }
        this.onInit = function () {

        }

        apiService.getPlotList().then(function(list) {
            self.plotArr = list.data.content;
        })

        this.doChangePlot = function () {
            self.data.idPlot = self.data.plot.idPlot
        }
       
        this.submit = function () {
            console.log('submitted', self.data);
            apiService.createHarvest(self.data).then(function(harvest, err) {
                console.log('rs', harvest, 'err', err);
                let a = $('#success');
                a.click();
            })
        }
    }
})();