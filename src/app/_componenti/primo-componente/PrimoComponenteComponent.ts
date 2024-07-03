import { Component, Input, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/_servizi/utility.service';


@Component({
    selector: 'app-primo-componente',
    templateUrl: './primo-componente.component.html',
    styleUrls: ['./primo-componente.component.scss']
})
export class PrimoComponenteComponent implements OnInit {
    @Input()
    stringa!: string;

    titolo: string = "Ciao titolo";
    image: string = "https://via.placeholder.com/200";
    btnDisable: boolean = false;
    classeTD: string = "class2"


    obj: { btn: boolean, lb: string } = { btn: false, lb: "Clicca2" }

    obj2: { cls1: boolean, cls2: boolean, cls3: boolean } = { cls1: true, cls2: true, cls3: true }
    event: any;

    coord: { x: number, y: number } = { x: 0, y: 0 }


    constructor() {
        console.log("Costruttore");
    }
    ngOnInit(): void {
        console.log("ngOnInit");
        console.log(this.stringa);

    }


    getValoreStringa(): string {
        return 'sto ritornando una stringa';
    }

    getComplesso(): string {
        return 'elemento complesso';
    }

    cambiaCella(ev: MouseEvent): void {
        this.obj2 = { cls1: !this.obj2.cls1, cls2: !this.obj2.cls2, cls3: !this.obj2.cls3, }
        this.coord.y = ev.offsetY
        this.coord.x = ev.offsetX
        console.log(this.obj2, ev)
    }


    //----------------------------------------------------------------------------
    val: number = 10
    val2: number = 2

    aggiorna(dato: number): void {
        this.val = dato
    }




    setValore(): void {
        console.log("Attiva conteggio")
        setTimeout(() => this.val2 = 40, 3000)
    }

    //-------------------------------------------

    somma: number | null = null

    clickBtn(a: number, b: number): void {
        this.somma = UtilityService.somma(a, b)
    }

    // calcolaSomma(a: number, b: number): number {
    //  console.log("Funzione calcolo somma: " + a + " + " + b, a, b)
    //  return a + b
    //}
}
