"use strict";

angular.module("project3App").controller("ProductDialogController",
    function ProductDialogController($scope) {

        //object sem notandinn fyllir inní
        $scope.product = {
            name: "",
            price: "",
            imagePath: ""
        };

        $scope.onOk = function onOk(product) {
            if(product.name.length === 0) {
                console.log("of stutt");
                //TODO: Birta validation skilaboð :D
                return;
            }
            else {
                console.log("allt i godu med nafn - close");
                $scope.$close(product);
            }
        /*lokar glugganum og sér til þess að promise obj skilar success.
         Þegar gluggi lokast -> sendir frá sér $scope.seller -> fer í SellerDialogController,
         fær objectið inn í then.function(seller) */
        };

        $scope.onCancel = function onCancel() {
            $scope.$dismiss();
        };
    });
