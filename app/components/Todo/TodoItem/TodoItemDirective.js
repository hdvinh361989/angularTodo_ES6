/**
 * Created by vinhhoang on 14/11/2015.
 */

export class todoItemDirective {
  constructor() {
    return {
      restrict: 'EA',
      scope: {
        todo: '=',
        onDelete: '&',
        onChange: '&'
      },
      controller: 'todoItemController',
      controllerAs: 'tditCtrl',
      template: `
      <md-list-item ng-mouseenter="tditCtrl.active()"
                    ng-mouseleave="tditCtrl.deActive()"
                    ng-="tditCtrl.edit($event);">
        <md-checkbox ng-model="todo.complete"
                     ng-change="onChange()"></md-checkbox>
        <p  ng-show="!tditCtrl.isEditing"
            ng-class="{completed: todo.complete}">{{todo.content}}</p>
        <md-content ng-show="tditCtrl.isEditing" layout style="width: 100%">
          <md-input-container flex>
            <label>Todo</label>
            <input  ng-model="todo.content"
                    ng-keyup="tditCtrl.itemChangeHandler($event)"
                    ng-click="$event.stopPropagation()"
                    todo-focus="tditCtrl.isEditing"
                    ng-blur="onChange()">
          </md-input-container>
        </md-content>
        <span class="md-secondary"
                 ng-click="onDelete()"
                 ng-show="tditCtrl.isActive"
                 aria-label="Delete Button">X</span>
      </md-list-item>
      `
    }
  }
}
