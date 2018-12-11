angular.module('my-app').service('dialogUtils', dialogUtils);
function dialogUtils($window, $http, $timeout, ModalService) {

    let openPhanModal = function (info) {
        ModalService.showModal({
            templateUrl: "../client/partials/info-modal.html",
            controller: "infoModalCtrl",
            controllerAs: "infoModalCtrl",
            inputs: {
                type: "thuốc bảo vệ thực vật",
                info: info,
            }
        }).then(function (modal) {
            $('.modal-backdrop').last().remove();
            modal.element.modal();
            modal.close.then(function (data) {
                $('.modal-backdrop').last().remove();
                $('body').removeClass('modal-open');
                if (data) console.log("imported", data);
            });
        })
    }
    let openBvtvModal = function (info) {
        ModalService.showModal({
            templateUrl: "../client/partials/modal/info-modal.html",
            controller: "infoModalCtrl",
            controllerAs: "infoModalCtrl",
            inputs: {
                type: "phân bón",
                info: info,
            }
        }).then(function (modal) {
            $('.modal-backdrop').last().remove();
            modal.element.modal();
            modal.close.then(function (modal) {
                modal.element.modal();
                modal.close.then(function (data) {
                    $('.modal-backdrop').last().remove();
                    $('body').removeClass('modal-open');
                    if (data) console.log("imported", data);
                });
            })
        });
    }

    return {
        openPhanModal: openPhanModal,
        openBvtvModal: openBvtvModal
    }
}