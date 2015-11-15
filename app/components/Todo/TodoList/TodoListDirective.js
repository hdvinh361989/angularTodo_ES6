/**
 * Created by vinhhoang on 14/11/2015.
 */
export class todoListDirective {
  constructor() {
    return {
      scope: {
        ngModel: '='
      },
      controller: 'todoListController',
      controllerAs: 'tdlCtrl',
      templateUrl: 'components/Todo/TodoList/TodoList.tpl.html'
    }
  }
}
