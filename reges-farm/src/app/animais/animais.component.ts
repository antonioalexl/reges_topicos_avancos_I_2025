import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Animal } from '../modelos/animal';

@Component({
  selector: 'app-animais',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './animais.component.html',
  styleUrl: './animais.component.css'
})
export class AnimaisComponent {

   animaisMock: Animal[] = [
    {
      Id: 1,
      Especie: 'Bovino',
      DataNascimento: new Date(2021, 5, 15),
      Sexo: 'Macho',
      Cor: 'Marrom',
      Raca: 'Nelore',
      Peso: 450,
      Codigo: 'BOV001',
      Observacao: 'Animal saudável e bem alimentado.'
    },
    {
      Id: 2,
      Especie: 'Suíno',
      DataNascimento: new Date(2022, 2, 10),
      Sexo: 'Fêmea',
      Cor: 'Rosa',
      Raca: 'Duroc',
      Peso: 120,
      Codigo: 'SUI002',
      Observacao: 'Destinado à reprodução.'
    },
    { Id: 3,
      Especie: 'Ave',
      DataNascimento: new Date(2023, 0, 5),
      Sexo: 'Fêmea',
      Cor: 'Preto e branco',
      Raca: 'Galinha da Angola',
      Peso: 3,
      Codigo: 'AVE003',
      Observacao: 'Criação solta no pasto.'
    }
  ];

}
