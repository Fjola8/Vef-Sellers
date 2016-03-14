"use strict";

angular.module("project3App").factory("ProductDialog",
    function ProductDialog($uibModal) {
        return {
            show: function show(product) {
                var modalInstance = $uibModal.open({
                    templateUrl: "components/product-dlg/productDialog.html",
                    controller: "ProductDialogController",
                    resolve: {
                        modalParam: function() {
                            return {
                                product: product
                            };
                        }
                    }
                });
                return modalInstance.result;
            }
        };
    });
