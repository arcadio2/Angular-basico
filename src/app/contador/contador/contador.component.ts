import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template: ` 
    <h1>{{titulo}}</h1>
    <h3><strong>La base es: {{base}}</strong></h3>
    <button (click)="aumentar(base)"> +{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="aumentar(-base)"> -{{base}} </button>
    `
})

export class ContadorComponent {
    titulo:string = 'Bases de Angular';
    numero:number = 10;
    base: number = 5; 
    aumentar(valor: number){
        this.numero +=valor;    
    }
}