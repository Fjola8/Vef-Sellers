"use strict";

 angular.module("project3App").controller("SellerDetailController",
	function SellerDetailController($scope, AppResource, centrisNotify, $translate, $routeParams, ProductDialog) {

        $scope.Sellerid = $routeParams.id;

        AppResource.getSellerDetails(parseInt($scope.Sellerid)).success(function(seller ){
            $scope.seller = seller;
            console.log("safnar upplýsingum");
        });

    	$scope.changeLanguage = function(key) {
    		$translate.use(key);
    	};

});
