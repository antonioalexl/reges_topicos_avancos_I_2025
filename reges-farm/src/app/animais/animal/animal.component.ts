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
  imports: [RouterModule, FormsModule],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css',
})
export class AnimalComponent {
  protected animal: Animal = {};
  protected id: number = 0;

  constructor(
    private service: AnimaisService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {

      debugger;

      this.id = Number(params.get('id'));
      const animal = service.obterAnimalPorId(this.id);
      if (animal) {
        this.animal = animal;
      } else {
        // Trate o caso em que o animal não foi encontrado
        console.error('Animal não encontrado!');
      }
    });
  }



   protected onSubmit(form: NgForm) {
    if (this.id > 0) {
      this.service.editarAnimal(this.animal);
    } else {
      this.service.inserir(this.animal);
      alert('Animal Inserido');
      this.router.navigateByUrl('animais');
    }
  }
}
