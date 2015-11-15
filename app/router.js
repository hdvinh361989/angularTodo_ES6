/**
 * Created by vinhhoang on 14/11/2015.
 */
export class Configuration {

  constructor($stateProvider, $urlRouterProvider, $mdIconProvider) {
    $mdIconProvider
      .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
      .iconSet('content', 'bower_components/')
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);


    $stateProvider.state('home',{
      url: '/',
      templateUrl: 'components/Todo/todo.tpl.html'
    });
    $urlRouterProvider.otherwise('/');
  }
}
