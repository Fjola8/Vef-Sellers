"use strict";

angular.module("project3App").controller("ProductsTabController",
function ProductsTabController($scope, $uibModal, AppResource, $routeParams, centrisNotify, ProductDialog) {

  $scope.Sellerid = $routeParams.id;

  AppResource.getSellerProducts(parseInt($scope.Sellerid)).success(function(products ){
      $scope.products = products;
      if($scope.products.length === 0){
        console.log("BIRTA ERROR MESSAGE");
      }
  }).error(function() {
      centrisNotify.error("seller-details.Messages.LoadFailed");
  });

      $scope.onAddProduct = function onAddProduct() {
           console.log("Inni addproduct falli");
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
