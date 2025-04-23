package br.com.reges.helloworld.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class HelloController {
    

    @GetMapping(value="/")   
    public String GetHelloMessage(){

        return "Olá Mundo!!";
    }
}
