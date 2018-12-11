angular.module('my-app').controller("infoModalCtrl", infoModalCtrl);

function infoModalCtrl(close, type, info) {
    let self = this;
    self.type = type;
    self.info = info;
    self.ok = function () {
        close(null);
        $('body').removeClass('modal-open');
    }
}