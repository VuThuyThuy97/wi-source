(function () {
    let app = angular.module('my-app');

    app.config(['$qProvider', function ($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }]);

    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('home');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './client/partials/home/home-template.html',
                controller: 'homeCtrl as homeCtrl'
            })
            .state('info', {
                url: '/info/:idProduct',
                abtract:true,
                templateUrl: './client/partials/info/info-template.html',
                controller: 'infoCtrl as infoCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: './client/partials/about/about-template.html',
                // controller: 'aboutCtrl as infoCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: './client/partials/login/login-template.html',
                controller: 'loginCtrl as loginCtrl'
            })
            .state('success', {
                url: '/success',
                params: {
                    idPrd: null,
                },
                templateUrl: './client/partials/success/success-template.html',
                controller: 'successCtrl as successCtrl'
            })
            // .state('update', {
            //     url: '/update',
            //     templateUrl: '/racruoi/wi-source-client/partials/about/about-template.html',
            //     // controller: 'aboutCtrl as infoCtrl'
            // })
            .state('update-product', {
                url: '/product',
                templateUrl: './client/partials/form/new-product/new-product.html',
                controller: 'newProductCtrl as newProductCtrl'
            }).state('update-species', {
                url: '/species',
                templateUrl: './client/partials/form/new-species/new-species.html',
                controller: 'newSpeciesCtrl as newSpeciesCtrl'
            }).state('update-plot', {
                url: '/plot',
                templateUrl: './client/partials/form/new-plot/new-plot.html',
                controller: 'newPlotCtrl as newPlotCtrl'
            }).state('update-nsx', {
                url: '/nsx',
                templateUrl: './client/partials/form/new-producer/new-producer.html',
                controller: 'newProducerCtrl as newProducerCtrl'
            }).state('update-bvtv', {
                url: '/bvtv',
                templateUrl: './client/partials/form/new-bvtv/new-bvtv.html',
                controller: 'newBvtvCtrl as newBvtvCtrl'
            }).state('update-phan', {
                url: '/phan',
                templateUrl: './client/partials/form/new-phan/new-phan.html',
                controller: 'newPhanCtrl as newPhanCtrl'
            }).state('update-harvest', {
                url: '/harvest',
                templateUrl: './client/partials/form/new-harvest/new-harvest.html',
                controller: 'newHarvestCtrl as newHarvestCtrl'
            }).state('update-class', {
                url: '/class',
                templateUrl: './client/partials/form/new-class/new-class.html',
                controller: 'newClassCtrl as newClassCtrl'
            }).state('update-plant', {
                url: '/plant',
                templateUrl: './client/partials/form/new-plant/new-plant.html',
                controller: 'newPlantCtrl as newPlantCtrl'
            }).state('update-producer', {
                url: '/producer',
                templateUrl: './client/partials/form/new-producer/new-producer.html',
                controller: 'newProducerCtrl as newProducerCtrl'
            }).state('admin-user', {
                url: '/users',
                templateUrl: './client/partials/admin/user/user.html',
                controller: 'userManagerCtrl as userManagerCtrl'
            }).state('admin-history', {
                url: '/history',
                templateUrl: './client/partials/admin/history/history.html',
                controller: 'historyCtrl as historyCtrl'
            })

        // use the HTML5 History API
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        })

    })
})();
