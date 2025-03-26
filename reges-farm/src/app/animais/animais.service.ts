import { Injectable } from '@angular/core';
import { Animal } from '../modelos/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {


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


    public  inserir(input: Animal){
        this.animaisMock.push(input);
    }

    public obterAnimais(){
        return this.animaisMock;
    }

    public obterAnimalPorId(id:number){
      return this.animaisMock.find(t=>t.Id == id);
    }

    public removerAnimal(id:number){
      const index = this.animaisMock.findIndex(t => t.Id === id);
      if (index !== -1) {
        this.animaisMock.splice(index, 1);
      }
    }
    public editarAnimal(input: Animal){
      const index = this.animaisMock.findIndex(t => t.Id === input.Id);
      this.animaisMock[index] = input;

    }

  constructor() { }
}
