import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandaloneComponent } from './standalone/standalone.component';
import { TraditionComponent } from './tradition/tradition.component';

const routes: Routes = [{
  path: 'tradition',
  redirectTo: '',
  pathMatch: 'full'
}, {
  path: '',
  component: TraditionComponent,
  title: 'いつもの',
}, {
  path: 'standalone',
  component: StandaloneComponent,
  title: 'v14から',
}, {
  path: 'lazy',
  loadComponent: () => import('./lazy/lazy.component').then(mod => mod.LazyComponent),
  title: 'lazy loading',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
