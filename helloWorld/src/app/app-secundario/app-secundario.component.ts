import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-secundario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app-secundario.component.html',
  styleUrl: './app-secundario.component.css'
})
export class AppSecundarioComponent {
  nome: string = 'o valor padrao é 1';
 colspan: number = 1;
 cor = 'color:blue';

  public clicaraqui() {
    this.colspan = this.colspan + 1;
    this.cor = 'color:red';
   // alert(this.nome);
  }

}
