"use strict";

 angular.module("project3App").controller("SellerDetailController",
	function SellerDetailController($scope, AppResource, centrisNotify, $translate, $routeParams) {

    $scope.changeLanguage = function(key) {
		$translate.use(key);
	};

    $scope.Sellerid = $routeParams.id;

    AppResource.getSellerDetails(parseInt($scope.Sellerid)).success(function(seller) {
        $scope.seller = seller;
    });
});
