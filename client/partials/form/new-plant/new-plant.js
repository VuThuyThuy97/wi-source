(function () {
    angular.module('my-app').controller("newPlantCtrl", newPlantCtrl);

    function newPlantCtrl(apiService) {
        let self = this;
        console.log('aa');
        this.data = {
            plantDay: "",
            idPlot: "",
            idSpecies: ""
        }
        this.onInit = function () {

        }

        apiService.getSpeciesList().then(function(list) {
            self.speciesArr = list.data.content;
        })

        apiService.getPlotList().then(function(list) {
            self.plotArr = list.data.content;
        })

        this.doChangeSpecies = function () {
            self.data.idSpecies = self.data.species.idSpecies
        }

        this.doChangePlot = function () {
            self.data.idPlot = self.data.plot.idPlot
        }
       
        this.submit = function () {
            console.log('submitted', self.data);
            apiService.createPlant(self.data).then(function(plot, err) {
                console.log('rs', plot, 'err', err);
                let a = $('#success');
                a.click();
            })
        }
    }
})();