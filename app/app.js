//import 'bower_components/angular-ui-router/release/angular-ui-router.js';
import 'bower_components/angular-ui-router/release/angular-ui-router.js';
import 'bower_components/angular-animate/angular-animate.min.js';
import 'bower_components/angular-aria/angular-aria.min.js';
import 'bower_components/angular-material/angular-material.min.js';
import {Configuration} from 'router.js';
import 'components/Todo/todoApp.js';

(function () {
  'use strict';

  angular
    .module('myApp', [
      'ui.router',
      'ngMaterial',
      'TodoApp'
    ]).
    config(Configuration);

  Configuration.$inject = ['$stateProvider', '$urlRouterProvider', '$mdIconProvider'];

  angular.bootstrap(document, ['myApp']);
})();
