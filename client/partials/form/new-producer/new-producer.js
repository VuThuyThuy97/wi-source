(function () {
    angular.module('my-app').controller("newProducerCtrl", newProducerCtrl);

    function newProducerCtrl(apiService) {
        let self = this;
        console.log('aa');
        this.data = {
            name: "",
            state: "",
            address: "",
            email: "",
            phoneNumber: "",
            delegate: ""
        }
        
        
       
        this.submit = function () {
            console.log('phan');
            apiService.createProducer(self.data).then(function (p, err){
                console.log('rs', p, 'err', err);
                let a = $('#success');
                a.click();
            })
        }
    }
})();