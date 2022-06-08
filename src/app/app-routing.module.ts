import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandaloneComponent } from './standalone/standalone.component';
import { TraditionComponent } from './tradition/tradition.component';

const routes: Routes = [{
  path: 'tradition',
  component: TraditionComponent,
  title: 'いつもの',
}, {
  path: 'standalone',
  component: StandaloneComponent,
  title: 'v14から',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
