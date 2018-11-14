(function () {
    angular.module('my-app').controller("newPhanCtrl", newPhanCtrl);

    function newPhanCtrl(apiService) {
        let self = this;
        console.log('aa');
        this.data = {
            name: "",
            buyPlace: "",
            buyDate: "",
            description: "",
            price: "",
            provider: ""
        }
        this.onInit = function () {

        }
       
        this.submit = function () {
            console.log('phan');
            apiService.createPhan(self.data).then(function (phan, err){
                console.log('rs', phan, 'err', err);
                let a = $('#success');
                a.click();
            })
        }
    }
})();