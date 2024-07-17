import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimoComponenteComponent } from './_componenti/primo-componente/PrimoComponenteComponent';
import { NavbarComponent } from './_componenti/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { MiadirDirective } from './_direttive/miadir.directive';
import { SubjectComponent } from './_componenti/subject/subject.component';
import { AltriSubjectComponent } from './_componenti/altri-subject/altri-subject.component';
import { DirettivaIfComponent } from './_componenti/direttiva-if/direttiva-if.component';
import { DirettivaForComponent } from './_componenti/direttiva-for/direttiva-for.component';
import { ElencoCategoriaComponent } from './_componenti/elenco-categoria/elenco-categoria.component';
import { ElencoLibriComponent } from './_componenti/elenco-libri/elenco-libri.component';
import { ElementoCategorieSubjectComponent } from './_componenti/elemento-categorie-subject/elemento-categorie-subject.component';
import { ElementoLibriSubjectComponent } from './_componenti/elemento-libri-subject/elemento-libri-subject.component';



@NgModule({
  declarations: [
    AppComponent,
    PrimoComponenteComponent,
    NavbarComponent,
    MiadirDirective,
    SubjectComponent,
    AltriSubjectComponent,
    DirettivaIfComponent,
    DirettivaForComponent,
    ElencoCategoriaComponent,
    ElencoLibriComponent,
    ElementoCategorieSubjectComponent,
    ElementoLibriSubjectComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
