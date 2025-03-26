import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: 'animais', loadComponent: () => import('./animais/animais.component').then(m => m.AnimaisComponent) },
  { path: 'animais/animal/:id', loadComponent: () => import('./animais/animal/animal.component').then(m => m.AnimalComponent) },
  { path: 'animais/animal', loadComponent: () => import('./animais/animal/animal.component').then(m => m.AnimalComponent) },



];
