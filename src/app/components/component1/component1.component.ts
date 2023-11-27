import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component {

//Atributos de la clase
customer = "Mar";
age: number = 21;
}
