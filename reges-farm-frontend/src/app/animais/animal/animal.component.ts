import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  ActivatedRoute,
  ParamMap,
  Router,
  RouterModule,
} from '@angular/router';
import { Animal } from '../../modelos/animal';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css',
})
export class AnimalComponent {
  protected animal: Animal = {};
  protected id: number = 0;
  protected modoEdicao: boolean = false;
  protected emEdicao: boolean = false;

  constructor(
    private service: AnimaisService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      debugger;

      this.id = Number(params.get('id'));

      if (this.id) {
        this.modoEdicao = true;
        this.service.obterAnimalPorId(this.id).subscribe({
          next: (dados) => {
            this.animal = dados;
          },
          error: (erro) => {
            console.error('Erro ao carregar animais:', erro);
          },
        });
      }
    });
  }

  protected onSubmit(form: NgForm) {
    if (this.id > 0) {
      this.service.editarAnimal(this.animal).subscribe({
        next: (animais) => {
          this.router.navigateByUrl('animais');
        },
        error: (erro) => {
          console.error('Erro ao alterar animal:', erro);
        },
      });
    } else {
      this.service.inserir(this.animal).subscribe({
        next: (animais) => {
          this.router.navigateByUrl('animais');
        },
        error: (erro) => {
          console.error('Erro ao inserir animal:', erro);
        },
      });
    }
  }
  protected onEditar (){
    this.modoEdicao = false;
    this.emEdicao = true;

  }
  protected onCancelar(){
    this.modoEdicao = true;
    this.emEdicao = false;
  }
}
