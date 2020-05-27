(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController)

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.menu = "";
  $scope.message ="";
    $scope.checkMenu = function() {
      var itemCount = getItemCount($scope.menu.split(','));
      console.log ("Item Count: " + itemCount)
      $scope.message = getMessage(itemCount);
    };

    function getItemCount(menuItems){
      var i = 0;

      menuItems.forEach(function(item){
        console.log("Item Type: " + (typeof item));
        console.log ("Item: " + item);
        console.log ("Item Length:" + item.length);
        if (item.length > 0){
         i+=1;
       }
      });
      return i;
    };

    function getMessage(itemCount) {
      if (itemCount == 0){
        return "Please enter data first";
      }
      else if (itemCount > 0 && itemCount <= 3){
        return "Enjoy!";
      }
      return  "Too much!";
  };
}

})();


























//(function () {
//'use strict';

//angular.module('LunchCheck', [])
//.controller('LunchCheckController', LunchCheckController);

//  LunchCheckController.$inject = ['$scope'];

//  function LunchCheckController($scope){
//angular.module('LunchCheck', [])

//.controller('LunchCheckController', function ($scope) {
  //$scope.menu = "";
//  $scope.sayMessage = function () {
//    if (checkMenu($scope.menu) <= 3){
//      return "Enjoy!";
//    }
//    return  "Too much!";
//  };

//  console.log("Menu")
//  function checkMenu(string) {
//    const menuItems = $scope.menu.split(',')
//    console.log("Menu")
//    return menuItems.length
//  }


//});

//})();
