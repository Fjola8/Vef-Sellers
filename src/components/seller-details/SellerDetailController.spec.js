"use strict";

describe("SellerDetailController", function() {
	beforeEach(module("project3App"));

	var scope, ctrl, translate, resource, routeParameter;

	describe("Language checking2", function() {
		beforeEach(inject(function($controller, $rootScope, $translate) {
			scope = $rootScope.$new();
			translate = $translate;
			ctrl = $controller("SellerDetailController", {
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
		beforeEach(inject(function($controller, $rootScope, AppResource, $routeParams) {
			scope = $rootScope.$new();
			resource = AppResource;
            routeParameter = $routeParams;
            routeParameter = 0;
			spyOn(resource, 'getSellerDetails').and.callThrough();

			ctrl = $controller("SellersDetailController", {
				$scope : scope,
				AppResource: resource,
                $routeParams: 	routeParameter
			});
		}));

/*		it("should have variables defined", function() {
			expect(ctrl).toBeDefined();
			expect(resource).toBeDefined();
			expect(scope).toBeDefined();
		});

        it("getSellerDetails should be called as the page is entered, with the correct id", function() {
		    expect(resource.getSellerDetails).toHaveBeenCalledWith(routeParameter.id);
	    }); */

	});
});
