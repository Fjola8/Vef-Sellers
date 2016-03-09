"use strict";

angular.module("project3App").controller("SellerDialogController",
    function SellerDialogController($scope) {
        //bæta svo við , $entity í svigann -> if($entity){$scope.model = $entity} else

        //object sem notandinn fyllir inní
        $scope.sellerModel = {
            name: "",
            category: "",
            imagePath: ""
        };

        $scope.onOk = function onOk() {
            if($scope.seller.name.length === 0) {
                //TODO: Birta validation skilaboð :D
                return;
            }
            else {
                $scope.close($scope.seller);
            }
        /*lokar glugganum og sér til þess að promise obj skilar success.
         Þegar gluggi lokast -> sendir frá sér $scope.seller -> fer í SellerDialogController,
         fær objectið inn í then.function(seller) */
        };

        $scope.cancel = function onCancel() {
            $scope.dismiss();
        };
    });
