(function () {
    angular.module('my-app').controller("newProductCtrl", newProductCtrl);

    function newProductCtrl(apiService, $emit) {
        let self = this;
        console.log('aa');
        this.data = {
            name: "",
            plantDay: "",
            price: "",
            img: "",
            idSpecies: "",
            idClass: "",
        }

        apiService.getPlantList().then(function (plant) {
            self.plantArr = plant.data.content;
        })

        apiService.getClassList().then(function (c) {
            self.classArr = c.data.content
        })
        this.doChangePlant = function () {
            self.data.idPlant = self.data.plant.idPlant;
            self.data.idSpecies = self.data.plant.species.idSpecies;
        }
        this.doChangeClass = function () {
            self.data.idClass = self.data.class.idClass;
        }

        this.submit = function () {
            apiService.createProduct(self.data).then(function (product, err) {
                self.newId = product.data.content.idProduct;
                let a = $('#psuccess');
                a.click();
            })
        }
    }
})();