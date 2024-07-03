import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class UtilityService {


    static somma(a: number, b: number): number {
        console.log("Service calcolo somma", a, b)
        return a + b;
    }
}
