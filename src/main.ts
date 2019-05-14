import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { dev_mode } from './environments/environment';
import 'hammerjs';

if (dev_mode.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
