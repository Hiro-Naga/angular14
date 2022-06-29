import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { StandaloneComponent } from './standalone/standalone.component';
import { TraditionComponent } from './tradition/tradition.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/tradition',
  pathMatch: 'full'
}, {
  path: 'tradition',
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
