/**
 * Created by vinhhoang on 15/11/2015.
 */
angular.module('TodoApp.TodoFocus', [])
.directive('todoFocus', todoFocus);

todoFocus.$inject = ['$timeout'];

function todoFocus($timeout){
  return{
    link: function (scope, element, attrs) {
      scope.$watch(attrs.todoFocus, function (newVal, oldVal) {
        if(newVal && newVal === true){
          $timeout(function () {
            element.focus()
          }, 10, false);
        }
      });
    }
  }
}