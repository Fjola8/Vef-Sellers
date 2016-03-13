"use strict";

  angular.module("project3App").directive("productItem", function () {
  	return {
  		restrict: "E",
  		templateUrl: "components/product/product.html",
      controller: "ProductController"
  	};
  });
