import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './testes.component.html',
  styleUrl: './testes.component.css',
})
export class TestesComponent {
   nomeUsuario = '';
}
