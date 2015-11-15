/**
 * Created by vinhhoang on 14/11/2015.
 */
export class todoItemController {
  constructor($scope) {
    var ctrl = this;
    ctrl.$scope = $scope;

    //Global Property
    ctrl.isActive = false;
    ctrl.isEditing = false;
  }

  active() {
    this.isActive = true;
  }

  deActive() {
    this.isActive = false;
  }

  edit($event) {
    this.isEditing = true;
  }

  itemChangeHandler($event) {
    var keyCode = $event.keyCode;
    if (keyCode === 13) {
      this.isEditing = false;
    }
  }
}
