import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";

import {LibSharedModule} from "../../../lib-shared/src/lib/lib-shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    LibSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
