import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule),
    outlet: 'footer'
  },
  {
    path: '',
    loadChildren: () => import('./header/header.module').then(m => m.HeaderModule),
    outlet: 'header'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
