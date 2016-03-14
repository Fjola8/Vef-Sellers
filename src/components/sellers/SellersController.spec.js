"use strict";

describe("SellersController", function() {
	beforeEach(module("project3App"));

	var scope, ctrl, translate, resource, sellerDlg;

	describe("Language checking", function() {
		beforeEach(inject(function($controller, $rootScope, $translate) {
			scope = $rootScope.$new();
			translate = $translate;
			ctrl = $controller("SellersController", {
				$scope : scope,
				$translate : translate
			});
		}));

		it("should prefer is", function() {
			scope.changeLanguage("");
			expect(translate.proposedLanguage()).toEqual("is");
		});

		it("should change to is", function() {
			scope.changeLanguage("is");
			expect(translate.proposedLanguage()).toEqual("is");
		});

		it("should change to en", function() {
			scope.changeLanguage("en");
			expect(translate.proposedLanguage()).toEqual("en");
		});
	});

/*	describe("checking sellers", function() {
		beforeEach(inject(function($controller, $rootScope, AppResource, SellerDialog) {
			scope = $rootScope.$new();
			resource = AppResource;
			sellerDlg = SellerDialog;
			ctrl = $controller("SellersController", {
				$scope : scope,
				AppResource: resource,
				SellerDialog : sellerDlg
			});
		}));
	}); */

});
