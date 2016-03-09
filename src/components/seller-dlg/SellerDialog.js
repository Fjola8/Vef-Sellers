"use strict";

angular.module("project3App").factory("SellerDialog",
    function SellerDialog($uibModal) {
        return {
            show: function() {
                var modalInstance = $uibModal.open({
                    templateUrl: "components/seller-dlg/sellerDialog.html",
                    controller: "SellerDialogController"
                });
                return modalInstance.result;
            }
        };
    });
