import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from "../shared/shared.module";
const routes: Routes = [{ path: '', component: HeaderComponent }];
@NgModule({
  declarations: [HeaderComponent],
  imports: [ SharedModule, RouterModule.forChild(routes)],
  providers: [],
  bootstrap: [HeaderComponent],
})
export class HeaderModule {}
