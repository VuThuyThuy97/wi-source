(function () {
    angular.module('my-app').controller("newPlotCtrl", newPlotCtrl);

    function newPlotCtrl(apiService) {
        let self = this;
        console.log('aa');
        this.data = {
            area: "",
            owner: "",
            address: "",
            idProducer: ""
        }
        this.onInit = function () {

        }

        this.doChangeProducer = function () {
            self.data.idProducer = self.data.producer.idProducer;
        }
       
        apiService.getProducerList().then(function(list) {
            console.log('prd arr', list);
            self.producerArr = list.data.content;
        })

        this.submit = function () {
            console.log('submitted', self.data);
            apiService.createPlot(self.data).then(function(plot, err) {
                console.log('rs', plot, 'err', err);
                let a = $('#success');
                a.click();
            })
        }
    }
})();