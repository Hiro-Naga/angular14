import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { TraditionComponent } from './tradition/tradition.component';

@NgModule({
  declarations: [
    AppComponent,
    TraditionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
