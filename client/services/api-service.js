angular.module('my-app').service('apiService', apiService);
function apiService ($http, $window) {

    // let BASE_URL = 'http://localhost:3000';

    let PRODUCT_INFO = '/product/info';
    let PRODUCT_LIST = '/product/list';
    let PRODUCT_NEW = '/product/new';
    let PLOT_NEW = '/plot/new';
    let PLOT_LIST = '/plot/list';
    let PHAN_NEW = '/fertilizer/new';
    let PHAN_LIST = '/fertilizer/list';
    let BVTV_NEW = '/pestiside/new';
    let BVTV_LIST = '/pestiside/list';
    let HARVEST_NEW = '/harvest/new';
    let HARVEST_LIST = '/harvest/list';
    let SPECIES_NEW = '/species/new';
    let SPECIES_LIST = '/species/list';
    let PLANT_LIST = '/plant/list';
    let PLANT_NEW = '/plant/new';
    let PRODUCER_LIST = '/producer/list';
    let PRODUCER_NEW = 'producer/new';
    let CLASS_LIST = '/class/list';
    let CLASS_NEW = 'class/new';

    let service = {};

    service.getProductInfo = function (idProduct) {
        return $http.get(PRODUCT_INFO + '/'+ idProduct);
    }
    service.getProductList = function () {
        return $http.get(PRODUCT_LIST, {});
    }
    service.createProduct = function (product) {
        return $http.post(PRODUCT_NEW, product);
    }
    service.createPlot = function (plot) {
        return $http.post(PLOT_NEW, plot);
    }
    service.getPlotList = function () {
        return $http.get(PLOT_LIST);
    }
    service.createPhan = function (phan) {
        return $http.post(PHAN_NEW, phan);
    }
    service.getPhanList = function () {
        return $http.get(PHAN_LIST);
    }
    service.createBvtv= function (bvtv) {
        return $http.post(BVTV_NEW, bvtv);
    }
    service.getBvtvList = function () {
        return $http.get(BVTV_LIST);
    }
    service.createHarvest = function (harvest) {
        return $http.post(HARVEST_NEW, harvest);
    }
    service.getHarvestList = function () {
        return $http.get(HARVEST_LIST);
    }
    service.createSpecies = function (species) {
        return $http.post(SPECIES_NEW, species);
    }
    service.getSpeciesList = function () {
        return $http.get(SPECIES_LIST);
    }

    service.createProducer = function (producer) {
        return $http.post(PRODUCER_NEW, producer);
    }
    service.getProducerList = function () {
        return $http.get(PRODUCER_LIST);
    }

    service.createPlant = function (plant) {
        return $http.post(PLANT_NEW, plant);
    }
    service.getPlantList = function () {
        return $http.get(PLANT_LIST);
    }
    service.createClass = function (cl) {
        return $http.post(CLASS_NEW, cl);
    }
    service.getClassList = function () {
        return $http.get(CLASS_LIST);
    }

    service.idProduct = "";


    return service;
}