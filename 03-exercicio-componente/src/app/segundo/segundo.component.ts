import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-segundo',
  standalone: true,
  imports: [FormsModule], //PARA PODER USAR O BINDING NGMODEL NO HTML...
  templateUrl: './segundo.component.html',
  styleUrl: './segundo.component.css'
})
export class SegundoComponent {

  valorInput: string = "";
}
