import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from "@angular/elements";
import { AppRoutingModule } from './app-routing.module';
import { AngularClock } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
@NgModule({
  declarations: [
    AngularClock
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: "/"}],
  entryComponents: [AngularClock],
  bootstrap : [AngularClock]
})
export class AppModule {
  constructor(private injector: Injector) {
    const appElement = createCustomElement(AngularClock, {
      injector: this.injector
    }); 

    customElements.define("ng-clock", appElement);
  }
}


