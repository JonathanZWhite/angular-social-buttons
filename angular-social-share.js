/*global $:false */
'use strict';

function SocialShare() {
    return {
        restrict: "EA",
        replace: true,
        transclude: true,
        scope: {
          url: '=',
          hashtags: '@',
          message: '@',
          network: '@'
        },
        controller: ['$scope', function($scope) {

        }],
        template: '<a ng-href="{{href}}"" ng-transclude target=_"blank"></a>',
        link: function(scope, elem, attr) {
          scope.$watch('network', function(oldVal, newVal) {
              switch(scope.network) {
                case 'twitter':
                  scope.href='http://twitter.com/share?text=' + scope.message + '&' + scope.url + '&hashtags=' + scope.hashtags;
                  break;
                case 'linkedin':
                  scope.href='http://www.linkedin.com/shareArticle?mini=true&url=' + scope.url + '&title=' + scope.message;
                  break;
                case 'facebook':
                  scope.href='http://facebook.com/sharer.php?u=' + scope.url;
                  break;
              }
          });
        }
    };
}

angular
    .module('directives.SocialShare', [])
    .directive('socialshare', SocialShare);