angular.module('my-app').controller("infoModalCtrl", infoModalCtrl);

function infoModalCtrl(close, type, info, history) {
    let self = this;
    self.type = type;
    self.info = info;
    self.history = history
    self.ok = function () {
        close(null);
        $('body').removeClass('modal-open');
    }
}