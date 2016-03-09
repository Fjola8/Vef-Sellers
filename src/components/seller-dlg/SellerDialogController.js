"use strict";

angular.module("project3App").controller("SellerDialogController",
    function SellerDialogController($scope) {
        //bæta svo við , $entity í svigann -> if($entity){$scope.model = $entity} else

        //object sem notandinn fyllir inní
        $scope.seller = {
            name: "",
            category: "",
            imagePath: ""
        };

        $scope.onOk = function onOk(seller) {
            if(seller.name.length === 0) {
                console.log("of stutt");
                //TODO: Birta validation skilaboð :D
                return;
            }
            else {
                console.log("allt i godu med nafn - close");
                $scope.$close(seller);
            }
        /*lokar glugganum og sér til þess að promise obj skilar success.
         Þegar gluggi lokast -> sendir frá sér $scope.seller -> fer í SellerDialogController,
         fær objectið inn í then.function(seller) */
        };

        $scope.onCancel = function onCancel() {
            $scope.$dismiss();
        };
    });
