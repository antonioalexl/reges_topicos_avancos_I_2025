import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppSecundarioComponent } from "./app-secundario/app-secundario.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppSecundarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'helloWorld';


  public cliqueAqui(){

    alert('olá!');
  }


}
