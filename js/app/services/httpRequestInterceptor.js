function myInterceptor() {
  this.responseError = function () {
    alert('error')
  };
};

angular
    .module('app')
    .service('myInterceptor', myInterceptor)
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('MyInterceptor');
    });