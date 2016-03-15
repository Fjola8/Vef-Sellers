"use strict";

describe("SellersController", function() {
	beforeEach(module("project3App"));

	var scope, ctrl, translate, resource, myCentrisNotify, sellerDlg;

	var mockSellerDlg = {
		show: function() {
			return {
				then: function(fn){
					fn({name:"seller", category: "category"});
				}
			};
		}
	};

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

	describe("checking sellers", function() {
		beforeEach(inject(function($controller, $rootScope, AppResource, centrisNotify, SellerDialog) {
			scope = $rootScope.$new();
			resource = AppResource;
			myCentrisNotify = centrisNotify;

			spyOn(resource, 'getSellers').and.callThrough();
			spyOn(resource, 'updateSeller').and.callThrough();
			spyOn(myCentrisNotify, "error").and.callThrough();
			spyOn(mockSellerDlg, 'show').and.callThrough();

			ctrl = $controller("SellersController", {
				$scope : scope,
				AppResource: resource,
				centrisNotify : myCentrisNotify,
				SellerDialog : mockSellerDlg
			});
		}));

		it("should have variables defined", function() {
			expect(ctrl).toBeDefined();
			expect(resource).toBeDefined();
			expect(scope).toBeDefined();
			expect(mockSellerDlg).toBeDefined();
		});

		it("should call getSellers function", function() {
			expect(resource.getSellers).toHaveBeenCalled();
		});

		it("should fill the sellers list of all sellers", function() {
            expect(scope.sellers).not.toEqual([]);
        });

		it("should open modal dialog for add", function () {
            scope.onAddSeller();
            expect(mockSellerDlg.show).toHaveBeenCalled();
        });

		//virkar ekki, vantar id?
	/*	it("should open modal dialog for edit", function () {
            scope.onEditSeller();
            expect(mockSellerDlg.show).toHaveBeenCalled();
        });b*/

	});
});
