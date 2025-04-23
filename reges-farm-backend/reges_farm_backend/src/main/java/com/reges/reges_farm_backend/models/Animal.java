package com.reges.reges_farm_backend.models;

import java.time.LocalDate;

public class Animal {
    private int Id;
    private String Especie;
    private LocalDate DataNascimento;
    private String Sexo;
    private String Cor;
    private String Raca;
    private float Peso;
    private String Codigo;
    private String Observacao;
    


    public void setId(int valor) {
        this.Id = valor;
    }

    public int getId() {
        return this.Id;
    }

    public void setEspecie(String especie) {
        this.Especie = especie;
    }

    public String getEspecie() {
        return this.Especie;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.DataNascimento = dataNascimento;
    }

    public LocalDate getDataNascimento() {
        return this.DataNascimento;
    }

    public void setSexo(String sexo) {
        this.Sexo = sexo;
    }

    public String getSexo() {
        return this.Sexo;
    }

    public void setCor(String cor) {
        this.Cor = cor;
    }

    public String getCor() {
        return this.Cor;
    }

    public void setRaca(String raca) {
        this.Raca = raca;
    }

    public String getRaca() {
        return this.Raca;
    }

    public void setPeso(float peso) {
        this.Peso = peso;
    }

    public float getPeso() {
        return this.Peso;
    }

    public void setCodigo(String codigo) {
        this.Codigo = codigo;
    }

    public String getCodigo() {
        return this.Codigo;
    }

    public void setObservacao(String observacao) {
        this.Observacao = observacao;
    }

    public String getObservacao() {
        return this.Observacao;
    }
}


