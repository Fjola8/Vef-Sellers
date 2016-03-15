"use strict";

angular.module("project3App").controller("ProductsTabController",
function ProductsTabController($scope, $uibModal, AppResource, $routeParams, centrisNotify, ProductDialog) {

  $scope.alerts = "";
  $scope.Sellerid = $routeParams.id;

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  AppResource.getSellerProducts(parseInt($scope.Sellerid)).success(function(products ){
      $scope.products = products;
      if($scope.products.length === 0){
        $scope.alerts = [
           { type: 'danger', timeout: 6000, msg:"This seller has no products" },
         ];
      }
  }).error(function() {
      centrisNotify.error("seller-details.Messages.LoadFailed");
  });

      $scope.onAddProduct = function onAddProduct() {
           console.log($scope.Sellerid);
       ProductDialog.show().then(function(product) {
         AppResource.addSellerProduct(parseInt($scope.Sellerid), product).success(function(products) {
             var newProduct = product;
             $scope.products.push(newProduct);
             centrisNotify.success("seller-details.Messages.SaveSucceeded");
         }).error(function() {
             centrisNotify.error("seller-details.Message.SaveFailed");
         });
       });
     };

});
