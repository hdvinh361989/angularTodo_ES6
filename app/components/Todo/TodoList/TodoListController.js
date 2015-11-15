/**
 * Created by vinhhoang on 14/11/2015.
 */
import {Todo} from 'components/Todo/Model/todo.js';
import {todoStorage} from 'components/Todo/helper/TodoStorage.js';

var storage = new todoStorage('todo');

export class todoListController {

  constructor($scope, $timeout) {
    var ctrl = this;

    //Global Property
    ctrl.newTodo = new Todo();
    ctrl.filter = '';
    ctrl.todos = storage.datas;
    ctrl.status = '';
    ctrl.$timeout = $timeout;
  }

  doFilter(filter = '') {
    this.filter = filter;
  }

  inputChangeHandler($event) {
    var keyCode = $event.keyCode;
    this.status = 'Processing';
    if (keyCode === 13) {
      this.todos.push(this.newTodo);
      storage.save(this.newTodo).then(function () {
        this.status = "Add new Todo";
      }.bind(this));
      this.newTodo = new Todo();
    }
  }

  itemChangeHandler(item) {
    this.status = 'Processing';
    storage.save(item).then(function () {
      this.$timeout(() => {
        this.status = "Update Item Complete";
      }, 10);
    }.bind(this));
  }

  itemDeleteHandler(item) {
    this.status = 'Processing';
    this.todos.splice(this.todos.indexOf(item), 1);
    storage.remove(item).then(function () {
      this.$timeout(() => {
        this.status = "Delete one Item Complete";
      }, 10);
    }.bind(this));
  }

  clearCompletedTodo() {
    this.todos = this.todos.filter(function (v) {
      return !v.complete;
    });
    this.status = 'Processing';
    storage.removeAllCompleted().then(function () {
      this.$timeout(() => {
        this.status = "Delete all completed item";
      }, 10);
    }.bind(this));
  }

  get itemLeft() {
    return this.todos.filter(function (v) {
      return !v.complete;
    }).length;
  }
}