import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableComponent} from "./table/table.component";

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./table/table.module').then(m => m.TableModule),
 },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
