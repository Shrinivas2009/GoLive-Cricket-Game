import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import './polyfills';
import { AppModule } from './app/app.module';

import { environment } from './environments/environment';
import { AppRoutingModule }     from './app/app-routing.module';
if (environment.production) {
  enableProdMode();
}
// const platform = platformBrowserDynamic();
// platform.bootstrapModule(AppModule);

platformBrowserDynamic().bootstrapModule(AppModule)
// platformBrowserDynamic().bootstrapModule(AppRoutingModule);
  .catch(err => console.log(err));
