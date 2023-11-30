import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, FormsModule, Validator, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.css'
})
export class Component2Component {

formRegistro:any;
  submit() {

  }
}
