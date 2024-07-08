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


@NgModule({
  declarations: [
    AppComponent,
    PrimoComponenteComponent,
    NavbarComponent,
    MiadirDirective,
    SubjectComponent,
    AltriSubjectComponent

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
