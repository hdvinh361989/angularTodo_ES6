/**
 * Created by vinhhoang on 14/11/2015.
 */
import {todoItemController} from 'components/Todo/TodoItem/TodoItemController.js';
import {todoItemDirective} from 'components/Todo/TodoItem/TodoItemDirective.js';
import 'components/Todo/TodoFocus/TodoFocus.js';

(function () {
  angular.module('TodoApp.TodoItem', ['TodoApp.TodoFocus'])
  .directive('todoItem', todoItemDirective)
  .controller('todoItemController', todoItemController);

  todoItemController.$inject = ['$scope'];
})();
