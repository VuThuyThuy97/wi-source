angular.module('my-app').controller("successCtrl", successCtrl);

function successCtrl($location, $timeout, $on, $emit, $stateParams) {
    let self = this;
    self.message = "Update Successfully"
    // $on('product-updated', function (product, stateParams) {
    if ($stateParams.idPrd) {
        self.qrMessage = 'Save the QR code of your product';
        let url = 'http://13.250.197.210:3040/info/' + $stateParams.idPrd;
        // let url = 'http://13.250.197.210:3040/info/' + 1;
        QRCode.toCanvas(document.getElementById('canvas'), url, function (error) {
            if (error) console.error(error)
            console.log('success!');
        })
    }
    // })
}