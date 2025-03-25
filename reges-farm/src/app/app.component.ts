import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimaisComponent } from "./animais/animais.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AnimaisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reges-farm';
}
