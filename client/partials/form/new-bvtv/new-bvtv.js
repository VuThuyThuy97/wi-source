(function () {
    angular.module('my-app').controller("newBvtvCtrl", newBvtvCtrl);

    function newBvtvCtrl(apiService) {
        let self = this;
        console.log('aa');
        this.data = {
            name: "",
            buyPlace: "",
            buyDate: "",
            description: "",
            price: "",
            provider: "",
            usable: ""
        }
        this.onInit = function () {

        }
       
        this.submit = function () {
            apiService.createBvtv(self.data).then(function(bvtv, err) {
                console.log('rs', bvtv, 'err', err);
                let a = $('#success');
                a.click();
            })
        }
    }
})();