import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../modelos/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

    constructor(private http: HttpClient) { }

     private urlApi: string = "http://localhost:8080/";

    public  inserir(input: Animal) {
        return this.http.post(this.urlApi + "animal", input);
    }

    public obterAnimais(){
          return this.http.get<Array<Animal>>(this.urlApi +"animais");
    }

    public obterAnimalPorId(id:number){
      //return this.animaisMock.find(t=>t.Id == id);
      return this.http.get(this.urlApi +"animal/" + id );
    }

    public removerAnimal(id:number){
      /*const index = this.animaisMock.findIndex(t => t.Id === id);
      if (index !== -1) {
        this.animaisMock.splice(index, 1);
      }*/
      return this.http.delete(this.urlApi + "animal/" + id);

    }
    public editarAnimal(input: Animal){
      //const index = this.animaisMock.findIndex(t => t.Id === input.Id);
      //this.animaisMock[index] = input;
       return this.http.put(this.urlApi + "animal", input);

    }


}
