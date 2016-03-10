"use strict";

 angular.module("project3App").controller("SellerDetailController",
	function SellerDetailController($scope, AppResource, centrisNotify, $translate, $routeParams, ProductDialog) {

  $scope.Sellerid = $routeParams.id;

  AppResource.getSellerDetails(parseInt($scope.Sellerid)).success(function(seller ){
    $scope.seller = seller;
    console.log("safnar upplýsingum");
  });

AppResource.getSellerProducts(parseInt($scope.Sellerid)).success(function(products ){
  $scope.products = products;
  console.log("safnar vörum");
});

	$scope.changesLanguage = function(key) {
		$translate.use(key);
	};

  $scope.onAddProduct = function onAddProduct() {
        console.log("Inni addproduct falli");
		ProductDialog.show().then(function(seller) {
			AppResource.addSellerProduct(parseInt($scope.Sellerid)).success(function(products) {
            //    centrisNotify.success("sellers.Message.SaveSucceeded");
			}).error(function() {
				/*í src->shared->notify->centrisNotify.js(notar toastr bakvið tjöldin)
				tek inn centrisNotify inní controllerinn og get svo nálgast error message
				og á því tungumáli sem notnadinn er að nota, með því að sækja í sellers_en_EN.js*/
				centrisNotify.error("sellers.Message.SaveFailed");
			});
		});
	};

});
