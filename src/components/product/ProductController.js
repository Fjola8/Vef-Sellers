"use strict";

angular.module("project3App").controller("ProductController",
function ProductController($scope, $uibModal, AppResource, $routeParams, centrisNotify, ProductDialog) {

    AppResource.getSellerProducts(parseInt($scope.Sellerid)).success(function(products ){
        $scope.products = products;
        if($scope.products.length === 0){
          console.log("BIRTA ERROR MESSAGE");
        }
    }).error(function() {
        centrisNotify.error("seller-details.Messages.LoadFailed");
    });

    $scope.onEditProduct = function onEditProduct(productEdit) {
        ProductDialog.show(productEdit).then(function(product) {
            AppResource.updateProduct(productEdit.id, product).success(function(product) {
                console.log("inní updateSeller");
        //        centrisNotify.success("sellers.Messages.EditSucceeded");
            }).error(function() {
                console.log("error í Edit");
        //        centrisNotify.error("sellers.Messages.EditFailed");
            });
        });
      };

  });
