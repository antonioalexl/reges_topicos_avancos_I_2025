import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { Animal } from '../modelos/animal';
import { AnimaisService } from './animais.service';

@Component({
  selector: 'app-animais',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './animais.component.html',
  styleUrl: './animais.component.css',
})
export class AnimaisComponent {
  animaisMock: Array<Animal> = [];

  constructor(private service: AnimaisService) {}

  ngOnInit(): void {
    this.obterAnimais();
  }

  private obterAnimais() {
    this.service.obterAnimais().subscribe({
      next: (dados) => {
        this.animaisMock = dados;
        debugger;
        console.log('Animais carregados:', dados);
      },
      error: (erro) => {
        console.error('Erro ao carregar animais:', erro);
      },
    });
  }

  protected remover(id?: number) {

      Swal.fire({
        title: "Deseja realmente remover esse registro?",
        text: "Esta ação é irreversivel!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim",
        cancelButtonText: "Não"
      }).then((result) => {
        if (result.isConfirmed) {

          this.service.removerAnimal(id!).subscribe({
            next: () => {
              this.obterAnimais();
            },
            error: (erro) => {
              console.error('Erro ao carregar animais:', erro);
            },
          });


        }
      });


  }
}
