(function () {
    angular.module('my-app').controller("newClassCtrl", newClassCtrl);

    function newClassCtrl(apiService) {
        let self = this;
        console.log('aa');
        this.data = {
            type: "",
            count: "",
            date: "",
            description: "",
            idHarvest: ""
        }
        this.onInit = function () {

        }
       
        this.doChangeHarvest = function () {
            self.data.idHarvest = self.data.harvest.idHarvest;
        }
        apiService.getHarvestList().then(function(rs){
            self.harvestArr = rs.data.content;
        }) 

        this.submit = function () {
            console.log('submitted', self.data);
            apiService.createClass(self.data).then(function(rs){
                console.log(rs);
                let a = $('#success');
                a.click();
            })
        }
    }
})();