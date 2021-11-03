import { NgModule } from '@angular/core';
import { LibSharedComponent } from './lib-shared.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    LibSharedComponent
  ],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    LibSharedComponent,
    BrowserAnimationsModule
  ]
})
export class LibSharedModule { }
