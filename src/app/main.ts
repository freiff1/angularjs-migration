import 'angular';
import 'angular-resource';
import 'angular-animate';
import 'ng-infinite-scroll';
import 'angular-spinner';
import 'angular-auto-validate/dist/jcs-auto-validate';
import 'angular-ladda';
import 'angular-strap';
import 'angularjs-toaster';
import 'angular-ui-router';


import './app.main';
import './app.routes';
import './services/index';
import './filters/index';
import './components/index';

// angular.bootstrap(document.body, ['codecraft'], { strictDi: true });

import './polyfills';

import {NgModule} from '@angular/core';
import {UpgradeModule} from '@angular/upgrade/static';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
  ]
})
export class AppModule {
    // constructor(private upgrade: UpgradeModule) { }
    // ngDoBootstrap() {
    //     this.upgrade.bootstrap(document.body, ['codecraft'], { strictDi: true });
    // }
  // Override Angular bootstrap so it doesn't do anything
    ngDoBootstrap() {
    }
}

// platformBrowserDynamic().bootstrapModule(AppModule);
// Bootstrap using the UpgradeModule
platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  console.log("Bootstrapping in Hybrid mode with Angular & AngularJS");
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['codecraft']);
});
