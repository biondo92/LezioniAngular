import { Component } from '@angular/core';
import { UtilityService } from './_servizi/utility.service';
import { Categoria } from './type/categoria.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'LezioniAngular';
  message = 'Ciao mondo da ts';


  somma: number | null = null

  clickBtn(a: number, b: number): void {
    this.somma = UtilityService.somma(a, b)
  }

  // calcolaSomma(a: number, b: number): number {
  // console.log("Funzione calcolo somma: " + a + " + " + b, a, b)
  //  return a + b
  //}
  //----------------------------------------------------------------

  public categoriaSelezionata: Categoria | null = null

  selezionaCategoria(cat: Categoria): void {
    this.categoriaSelezionata = cat
  }
}
