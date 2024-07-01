import { Component, Input, OnInit } from '@angular/core';


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

    cambiaCella(): void {
        this.obj2 = { cls1: !this.obj2.cls1, cls2: !this.obj2.cls2, cls3: !this.obj2.cls3, }
    }
}
