"use strict";

angular.module("project3App").factory("ProductDialog",
    function ProductDialog($uibModal) {
        return {
            show: function() {
                var modalInstance = $uibModal.open({
                    templateUrl: "components/product/productDialog.html",
                    controller: "ProductDialogController"
                });
                return modalInstance.result;
            }
        };
    });
