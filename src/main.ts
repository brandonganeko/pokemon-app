import * as angular from "angular";

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

var app = angular.module('clock', []);

app.directive("digitalClock", function($timeout, dateFilter) {
  return function(scope, element, attrs) {

    element.addClass('alert alert-info text-center clock');

    scope.updateClock = function() {
      $timeout(function() {
        element.text(dateFilter(new Date(), 'hh:mm:ss'));
        scope.updateClock();
      }, 1000);
    };

    scope.updateClock();

  };
});
