import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SegundoComponent } from '../segundo/segundo.component';

@Component({
  selector: 'app-primeiro',
  standalone: true,
  imports: [FormsModule, SegundoComponent],
  templateUrl: './primeiro.component.html',
  styleUrl: './primeiro.component.css'
})
export class PrimeiroComponent {

  textoInput : string = "";
  textoParagrafo: string = "";
  cor: boolean = false;


  cliqueBotao(){
    this.textoParagrafo = this.textoInput;

  }
  cliqueBotao2(){
    this.cor = true;
  }
}
