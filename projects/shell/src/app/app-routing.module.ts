import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    outlet: 'header',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mf5',
        remoteEntry: 'http://localhost:4205/remoteEntry.js',
        exposedModule: 'HeaderModule',
      }).then((m) => m.HeaderModule),
  },
  {
    path: '',
    outlet: 'footer',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mf5',
        remoteEntry: 'http://localhost:4205/remoteEntry.js',
        exposedModule: 'FooterModule',
      }).then((m) => m.FooterModule),
  },
  {
    path: 'table',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mf1',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: 'TableModule',
      }).then((m) => m.TableModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mf2',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: 'AppModule',
      }).then((m) => m.AppModule),
  },
  {
    path: 'content',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mf3',
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        exposedModule: 'AppModule',
      }).then((m) => m.AppModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'mf4',
        remoteEntry: 'http://localhost:4204/remoteEntry.js',
        exposedModule: 'AppModule',
      }).then((m) => m.AppModule),
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
