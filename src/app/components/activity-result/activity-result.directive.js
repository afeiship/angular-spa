(function() {
  'use strict';

  angular
    .module('dacangRemix')
    .directive('activityResult', activityResult);

  /** @ngInject */
  function activityResult($rootScope) {
    return {
      restrict: 'E',
      scope: {
        vm: '='
      },
      templateUrl: 'app/components/activity-result/tmpl.html',
      link:function (scope) {
        scope.test=function () {
          console.log('test!!!');
        }
      }
    };
  }

})();
