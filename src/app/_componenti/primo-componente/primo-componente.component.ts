import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-primo-componente',
  templateUrl: './primo-componente.component.html',
  styleUrls: ['./primo-componente.component.scss']
})
export class PrimoComponenteComponent implements OnInit {
  @Input()
  stringa!: string

  constructor() {
    console.log("Costruttore")
  }
  ngOnInit(): void {
    console.log("ngOnInit")
    console.log(this.stringa)

  }
}
