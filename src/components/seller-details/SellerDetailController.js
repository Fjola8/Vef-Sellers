"use strict";

 angular.module("project3App").controller("SellerDetailController",
	function SellerDetailController($scope, AppResource, centrisNotify, $translate, $routeParams) {

  $scope.Sellerid = $routeParams.id;

  AppResource.getSellerDetails(parseInt($scope.Sellerid)).success(function(seller ){
    $scope.seller = seller;
  });

	$scope.changesLanguage = function(key) {
		$translate.use(key);
	};

});
