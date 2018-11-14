(function () {
    angular.module('my-app').controller("homeCtrl", homeCtrl);

    function homeCtrl(apiService) {
        let self = this;
        this.productList = [];
        
        // this.$onInit = function () {
        //     console.log('init');
           
        // }
        console.log('home');

        this.click = function (product) {
            apiService.idProduct = product.idProduct;
        }

        apiService.getProductList().then(function (products, err) {
            console.log('err', err, 'prd', products);
            self.productList = products.data.content;
            console.log('---', self.productList);
        })
        this.submit = function () {
            console.log('submitted', self.data);
        }
    }
})();