"use strict";

angular.module("project3App").controller("ProductController",
function ProductController($scope, $uibModal, AppResource, $routeParams, centrisNotify, ProductDialog) {

  $scope.alerts = [];

  $scope.msg = "No Animation!";

  $scope.addAlert = function(msg, type) {
    $scope.alerts.push({
      msg: msg,
      type: type
    });
  };

    AppResource.getSellerProducts(parseInt($scope.Sellerid)).success(function(products ){
        $scope.products = products;
        if($scope.products.length === 0){
          $scope.errorMessage = "HALLO !!";
        }
    }).error(function() {
        centrisNotify.error("seller-details.Messages.LoadFailed");
    });

    $scope.onEditProduct = function onEditProduct(productEdit) {
        ProductDialog.show(productEdit).then(function(product) {
            AppResource.updateProduct(productEdit.id, product).success(function(product) {
              centrisNotify.success("productDlg.Messages.FillSuccess");
            }).error(function() {
            });
        });
      };

  });
