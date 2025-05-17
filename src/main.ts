import { enableProdMode, importProvidersFrom } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { environment } from "./environments/environment";
import { AppComponent } from "./app/app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { Sound } from "./app/sound.service";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule)],
}).catch((err) => console.error(err));
