import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Animal } from '../modelos/animal';
import { AnimaisService } from './animais.service';

@Component({
  selector: 'app-animais',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './animais.component.html',
  styleUrl: './animais.component.css'
})
export class AnimaisComponent {

   animaisMock: Animal[] = [ ];

   constructor(private service: AnimaisService){

    this.animaisMock = service.obterAnimais();
   }

   protected remover(id?: number) {
    if (id && window.confirm("Tem certeza que deseja remover este animal?")) {
        this.service.removerAnimal(id);
    }
}

}
