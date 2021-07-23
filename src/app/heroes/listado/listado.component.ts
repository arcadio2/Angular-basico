import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes:string [] = ['Ironman', 'Spiderman', 'Hulk', 'Thor', 'Goku', 'Vegeta']; 
  heroeBorrado:string=''; 
  
  borrarHeroe(){
    console.log("Borrando...");   
    this.heroeBorrado = this.heroes.splice(0,1).toString();
    console.log(this.heroeBorrado);  
  }
}
