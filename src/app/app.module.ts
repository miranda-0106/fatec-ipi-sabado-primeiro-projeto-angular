import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TituloFatecComponent } from './titulo-fatec/titulo-fatec.component';
import { CursosFatecComponent } from './cursos-fatec/cursos-fatec.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloFatecComponent,
    CursosFatecComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
