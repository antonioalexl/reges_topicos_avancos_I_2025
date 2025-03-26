import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Animal } from '../../modelos/animal';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})
export class AnimalComponent {

  protected animal: Animal = {};
}
