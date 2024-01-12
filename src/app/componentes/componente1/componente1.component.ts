import { Component } from '@angular/core';
import { User } from 'src/app/model/User'

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
  //atributos de la clase (atributos públicos)
  nombre:string="Maria";
  edad:number=10;
  frutas:string[]=["pera","manzana"];//arrays
  arboles:Array<string>=["peral", "manzano"];//arrays
  flag:boolean=true;
  user:User=new User("", "");


//método de la clase

  saludo(){
    alert("Hola");
  }
}
