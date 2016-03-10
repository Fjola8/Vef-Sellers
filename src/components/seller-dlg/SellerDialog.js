"use strict";

angular.module("project3App").factory("SellerDialog",
    function SellerDialog($uibModal) {
        return {
            show: function show(seller) {
                var modalInstance = $uibModal.open({
                    templateUrl: "components/seller-dlg/sellerDialog.html",
                    controller: "SellerDialogController",
                    resolve: {
                        modalParam: function() {
                            return {
                                seller: seller
                            };
                        }
                    }
                });
                return modalInstance.result;
            }
        };
    });
