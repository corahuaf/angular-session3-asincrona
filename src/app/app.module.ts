import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaModule } from './lista/lista.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ListaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
