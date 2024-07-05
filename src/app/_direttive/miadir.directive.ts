import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMiadir]'
})
export class MiadirDirective {

  @Input() coloreBase: string | null = null
  @Input() colore: string | null = null

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor = this.coloreBase
  }

  ngAfterViewInit() {
    this.el.nativeElement.style.backgroundColor = this.coloreBase
  }

  @HostListener('mouseenter') OnMouseEnter() {
    //cosa deve fare al passaggio del mouse
    this.cambiaColore(this.colore)

  }

  @HostListener('mouseleave') OnMouseLeave() {
    // cosa fare all'uscita del mouse 
    this.cambiaColore(this.coloreBase)
  }
  cambiaColore(colore: string | null): void {

    this.el.nativeElement.style.backgroundColor = colore
  }

}
