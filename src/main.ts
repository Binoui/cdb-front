import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// Enable the following for french version of the app
// // use the require method provided by webpack
// declare const require;
// // we use the webpack raw-loader to return the content as a string
// const truc = require('raw-loader!./locale/messages.fr.xlf');



platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    // Enable the following for french version of the app
    // { provide: TRANSLATIONS, useValue: truc },
    // { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' }
  ]

})
  .catch(err => console.log(err));
