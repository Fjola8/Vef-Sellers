"use strict";

angular.module("project3App").controller("SellerDialogController",
    function SellerDialogController($scope, centrisNotify) {
        //bæta svo við , $entity í svigann -> if($entity){$scope.model = $entity} else

        $scope.seller = {
            name: "",
            category: "",
            imagePath: ""
        };

        $scope.onOk = function onOk(seller) {
            if(seller.name.length === 0 || seller.category.length === 0 || seller.imagePath.length === 0) {
                centrisNotify.error("sellerDlg.Messages.FillInputbox");
                return;
            }
            else {
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
