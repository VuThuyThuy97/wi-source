angular.module('my-app').service('apiService', apiService);
function apiService ($http, $window, authentication) {

    // let BASE_URL = 'http://localhost:3000';

    let PRODUCT_INFO = 'public/product/info';
    let PRODUCT_LIST = 'public/product/list';
    let PRODUCT_NEW = '/product/new';
    let PLOT_NEW = '/plot/new';
    let PLOT_LIST = '/plot/list';
    let PHAN_NEW = '/fertilizer/new';
    let PHAN_LIST = '/fertilizer/list';
    let BVTV_NEW = '/pesticide/new';
    let BVTV_LIST = '/pesticide/list';
    let HARVEST_NEW = '/harvest/new';
    let HARVEST_LIST = '/harvest/list';
    let SPECIES_NEW = '/species/new';
    let SPECIES_LIST = '/species/list';
    let PLANT_LIST = '/plant/list';
    let PLANT_NEW = '/plant/new';
    let PRODUCER_LIST = '/producer/list';
    let PRODUCER_NEW = 'producer/new';
    let CLASS_LIST = '/class/list';
    let CLASS_NEW = '/class/new';
    let USER_LIST = '/user/list';
    let USER_EDIT = '/user/edit';
    let USER_DELETE = '/user/delete';

    let service = {};

    service.getProductInfo = function (idProduct) {
        return $http.get(PRODUCT_INFO + '/'+ idProduct);
    }
    service.getProductList = function () {
        return $http.get(PRODUCT_LIST);
    }
    service.createProduct = function (product) {
        return $http.post(PRODUCT_NEW, product, {
            headers: { 'Authorization': authentication.getToken()}
        });
    }
    service.createPlot = function (plot) {
        return $http.post(PLOT_NEW, plot, {
            headers: { 'Authorization': authentication.getToken()}
        });
    }
    service.getPlotList = function () {
        return $http.get(PLOT_LIST, {
            headers: { 'Authorization': authentication.getToken()}
        });
    }
    service.createPhan = function (phan) {
        return $http.post(PHAN_NEW, phan, {
            headers: { 'Authorization': authentication.getToken()}
        });
    }
    service.getPhanList = function () {
        return $http.get(PHAN_LIST, {
            headers: { 'Authorization': authentication.getToken()}
        });
    }
    service.createBvtv= function (bvtv) {
        return $http.post(BVTV_NEW, bvtv, {
            headers: { 'Authorization': authentication.getToken()}
        });
    }
    service.getBvtvList = function () {
        return $http.get(BVTV_LIST, {
            headers: { 'Authorization': authentication.getToken()}
        });
    }
    service.createHarvest = function (harvest) {
        return $http.post(HARVEST_NEW, harvest, {
            headers: { 'Authorization': authentication.getToken()}
        });
    }
    service.getHarvestList = function () {
        return $http.get(HARVEST_LIST, {
            headers: { 'Authorization': authentication.getToken()}
        });
    }
    service.createSpecies = function (species) {
        return $http.post(SPECIES_NEW, species, {
            headers: { 'Authorization': authentication.getToken()}
        });
    }
    service.getSpeciesList = function () {
        return $http.get(SPECIES_LIST, {
            headers: { 'Authorization': authentication.getToken()}
        });
    }

    service.createProducer = function (producer) {
        return $http.post(PRODUCER_NEW, producer, {
            headers: { 'Authorization': authentication.getToken()}
        });
    }
    service.getProducerList = function () {
        return $http.get(PRODUCER_LIST, {
            headers: { 'Authorization': authentication.getToken()}
        });
    }

    service.createPlant = function (plant) {
        return $http.post(PLANT_NEW, plant, {
            headers: { 'Authorization': authentication.getToken()}
        });
    }
    service.getPlantList = function () {
        return $http.get(PLANT_LIST, {
            headers: { 'Authorization': authentication.getToken()}
        });
    }
    service.createClass = function (cl) {
        return $http.post(CLASS_NEW, cl, {
            headers: { 'Authorization': authentication.getToken()}
        });
    }
    service.getClassList = function () {
        return $http.get(CLASS_LIST, {
            headers: { 'Authorization': authentication.getToken()}
        });
    }

    service.getUserList = function () {
        return $http.get(USER_LIST, {
            headers: { 'Authorization': authentication.getToken()}
        });
    }

    service.editUser = function (user) {
        return $http.post(USER_EDIT, user, {
            headers: { 'Authorization': authentication.getToken()}
        });
    }

    service.deleteUser = function (user) {
        return $http.post(USER_DELETE, user, {
            headers: { 'Authorization': authentication.getToken()}
        });
    }


    service.idProduct = "";


    return service;
}