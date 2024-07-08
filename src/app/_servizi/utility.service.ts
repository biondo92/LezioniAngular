import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class UtilityService {

    static somma(a: number, b: number): number {
        console.log("Service calcolo somma", a, b)
        return a + b;
    }

    static numeroCasuale(min: number, max: number): number {
        return Math.floor(Math.random() * max) + min
    }
}
