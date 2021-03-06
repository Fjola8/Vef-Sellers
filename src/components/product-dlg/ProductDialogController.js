"use strict";

angular.module("project3App").controller("ProductDialogController",
    function ProductDialogController($scope, modalParam, centrisNotify) {

        var modalObj = modalParam.product;
        if(modalObj !== undefined) {
            $scope.product = {
                name: modalObj.name,
                price: modalObj.price,
                imagePath: modalObj.imagePath,
                quantitySold: modalObj.quantitySold,
                quantityInStock: modalObj.quantityInStock
            };
        } else {
            $scope.product = {
                name: "",
                price: "",
                imagePath: "",
                quantitySold: "",
                quantityInStock: ""
            };
        }

        $scope.onOk = function onOk(product) {
            if(product.name.length === 0 || product.price.length === 0 || product.imagePath.length === 0 || product.quantitySold.length === 0 || product.quantityInStock.length === 0) {
                centrisNotify.error("productDlg.Messages.FillInputbox");
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
