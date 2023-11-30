import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component {

//Atributos de la clase
customer = "Mar";
age: number = 21;
years:any=["12,13,12,12"];
nom: string = "Mav";
valor : number =1;
frutas : any [] = [

{
nombre:"pera",
precio:1.80,
cantidad:4
},

{
  nombre:"manzana",
  precio:1.20,
  cantidad:12
  },
  {
    nombre:"naranja",
    precio:2.80,
    cantidad:15
    }

]
//metodos de la clase
subir() {
this.valor++;
}

borrar(nombreFruta:string) {

this.frutas=this.frutas.filter(x=>x.nombre !=nombreFruta);

}
}
