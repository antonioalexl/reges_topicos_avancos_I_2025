package com.reges.reges_farm_backend.controllers;

import java.sql.SQLException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.reges.reges_farm_backend.models.Animal;
import com.reges.reges_farm_backend.repositories.AnimalRepository;



@RestController
@CrossOrigin(origins = "*") // ou especifique o domínio
public class AnimalController {
       
    @GetMapping("animais")
    public List<Animal> GetAnimais() throws SQLException{
        AnimalRepository repository = new AnimalRepository();
        return repository.selectAll();
    }

    @PostMapping("animal")
    public void InserirAnimal(@RequestBody Animal entity) throws SQLException {
        AnimalRepository repository = new AnimalRepository();
        repository.insert(entity);        
       
    }
    @GetMapping("animal/{id}")
    public Animal GetAnimalById(@PathVariable(value = "id")int id) throws SQLException {
        AnimalRepository repository = new AnimalRepository();
        var animal = repository.selectById(id);
        if(animal != null){
            return animal;
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "");     
    }  
 
    @PutMapping("animal")
    public void AlterarAnimal(@RequestBody Animal entity) throws SQLException {
        AnimalRepository repository = new AnimalRepository();
        repository.update(entity);        
       
    }

    @DeleteMapping("animal/{id}")
    public void RemoverAnimal(@PathVariable(value = "id")int id) throws SQLException {
        AnimalRepository repository = new AnimalRepository();
        var animal = repository.selectById(id);
        if(animal == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "");
        }
        else{
            repository.delete(id);
        }           
    }      
}
