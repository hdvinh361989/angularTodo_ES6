/**
 * Created by vinhhoang on 14/11/2015.
 */
import {todoListController} from 'components/Todo/TodoList/TodoListController.js';
import {todoListDirective} from 'components/Todo/TodoList/TodoListDirective.js';
import 'components/Todo/TodoItem/TodoItem.js';

(function () {
  angular.module('TodoApp.TodoList', [
    'TodoApp.TodoItem'
  ])
    .directive('todoList', todoListDirective)
    .controller('todoListController', todoListController);

  todoListController.$inject = ['$scope', '$timeout'];
})();
