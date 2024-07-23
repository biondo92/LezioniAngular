import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_pagine/home/home.component';
import { ChiSiamoComponent } from './_pagine/chi-siamo/chi-siamo.component';
import { ContattiComponent } from './_pagine/contatti/contatti.component';
import { Pagina404Component } from './_pagine/pagina404/pagina404.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'chiSiamo', component: ChiSiamoComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: Pagina404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
