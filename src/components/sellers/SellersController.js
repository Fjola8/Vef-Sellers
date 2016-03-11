"use strict";

 angular.module("project3App").controller("SellersController",
	function SellersController($scope, AppResource, centrisNotify, $translate, SellerDialog) {

	//getSellers skilar okkur svari sem er object og fallið keyrist þegar success
	//gögnin (sellers) kemur frá servernum
	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers;
	});

	$scope.changeLanguage = function(key) {
		$translate.use(key);
	};

	$scope.onAddSeller = function onAddSeller() {
		SellerDialog.show().then(function(seller) {
			AppResource.addSeller(seller).success(function(sellers) {
            centrisNotify.success("sellers.Messages.SaveSucceeded");
			}).error(function() {
				    centrisNotify.error("sellers.Messages.SaveFailed");
			});
		});
	};

    $scope.onEditSeller = function onEditSeller(sellerEdit) {
        SellerDialog.show(sellerEdit).then(function(seller) {
            AppResource.updateSeller(sellerEdit.id, seller).success(function(seller) {
                centrisNotify.success("sellers.Messages.EditSucceeded");
            }).error(function() {
                centrisNotify.error("sellers.Messages.EditFailed");
            });
        });
    };
});
