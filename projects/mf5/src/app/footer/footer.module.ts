import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [{ path: '', component: FooterComponent }];
@NgModule({
  declarations: [FooterComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  providers: [],
  bootstrap: [FooterComponent],
})
export class FooterModule {}
