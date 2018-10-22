import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LanzamientosComponent } from './components/lanzamientos/lanzamientos.component';
import { ListaComponent } from './components/lista/lista.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LanzamientosComponent,
    ListaComponent,
    BuscadorComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
