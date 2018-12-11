(function () {
    angular.module('my-app').controller("newSpeciesCtrl", newSpeciesCtrl);

    function newSpeciesCtrl(apiService) {
        let self = this;
        console.log('aa');
        this.data = {
            name: "",
            provider: "",
            description: "",
            buyDate: "",
            produceDate: "",
            isValidated: 'Đạt chuẩn TCCS 21:2011/CGNTIS'
        }
        
        
       
        this.submit = function () {
            console.log('phan');
            apiService.createSpecies(self.data).then(function (species, err){
                console.log('rs', species, 'err', err);
                let a = $('#success');
                a.click();
            })
        }
    }
})();