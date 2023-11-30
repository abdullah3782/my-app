import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from "./components/component2/component2.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, Component1Component, Component2Component]
})
export class AppComponent {
  title = 'my-app';
}
