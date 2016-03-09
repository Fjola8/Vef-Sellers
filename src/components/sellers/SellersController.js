"use strict";

 angular.module("project3App").controller("SellersController",
	function SellersController($scope, AppResource, centrisNotify, $translate, SellerDialog) {

	//getSellers skilar okkur svari sem er object og fallið keyrist þegar success
	//gögnin (sellers) kemur frá servernum
	AppResource.getSellers().success(function(sellers) {
		$scope.sellers = sellers; //listi af sellers sem við setjum í scope
	});

	$scope.changeLanguage = function(key) {
		$translate.use(key);
	};

	$scope.onAddSeller = function onAddSeller() {

		SellerDialog.show().then(function(seller) {
			AppResource.addSeller(seller).sucess(function(seller) {
				var newSeller = seller;
				$scope.sellers.push(newSeller);
			}).error(function() {
				/*í src->shared->notify->centrisNotify.js(notar toastr bakvið tjöldin)
				tek inn centrisNotify inní controllerinn og get svo nálgast error message
				og á því tungumáli sem notnadinn er að nota, með því að sækja í sellers_en_EN.js*/
				centrisNotify.error("sellers.Message.SaveFailed");
			});
		});
	};
}); 

/*		var peterSellers = {
			name: "Peter",
			category: "Movies",
			imagePath: ""
		}; */

// EDIT AN ENTITY:  SellerDialog.show(entity).then(function(modiefiedEntity))
