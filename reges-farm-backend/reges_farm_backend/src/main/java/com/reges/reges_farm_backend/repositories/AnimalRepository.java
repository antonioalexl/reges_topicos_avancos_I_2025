package com.reges.reges_farm_backend.repositories;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.reges.reges_farm_backend.models.Animal;

public class AnimalRepository {
    private final String URL = "jdbc:mysql://localhost:3306/db_reges_farm";
    private final String USER = "root";
    private final String PASSWORD = "123456";

    private Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    public void insert(Animal animal) throws SQLException {
        String sql = "INSERT INTO animal (Especie, DataNascimento, Sexo, Cor, Raca, Peso, Codigo, Observacao) " +
                     "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        try (Connection conn = getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, animal.getEspecie());
            stmt.setDate(2, java.sql.Date.valueOf(animal.getDataNascimento())); // <- aqui a conversão
            stmt.setString(3, animal.getSexo());
            stmt.setString(4, animal.getCor());
            stmt.setString(5, animal.getRaca());
            stmt.setDouble(6, animal.getPeso());
            stmt.setString(7, animal.getCodigo());
            stmt.setString(8, animal.getObservacao());
            stmt.executeUpdate();
        }
    }

    public void update(Animal animal) throws SQLException {
        String sql = "UPDATE animal SET Especie = ?, DataNascimento = ?, Sexo = ?, Cor = ?, Raca = ?, Peso = ?, Codigo = ?, Observacao = ? " +
                     "WHERE Id = ?";
        try (Connection conn = getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, animal.getEspecie());
            stmt.setDate(2, java.sql.Date.valueOf(animal.getDataNascimento())); // <- aqui a conversão
            stmt.setString(3, animal.getSexo());
            stmt.setString(4, animal.getCor());
            stmt.setString(5, animal.getRaca());
            stmt.setDouble(6, animal.getPeso());
            stmt.setString(7, animal.getCodigo());
            stmt.setString(8, animal.getObservacao());
            stmt.setInt(9, animal.getId());
            stmt.executeUpdate();
        }
    }

    public void delete(int id) throws SQLException {
        String sql = "DELETE FROM animal WHERE Id = ?";
        try (Connection conn = getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, id);
            stmt.executeUpdate();
        }
    }

    public List<Animal> selectAll() throws SQLException {
        List<Animal> lista = new ArrayList<>();
        String sql = "SELECT * FROM animal";
        try (Connection conn = getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql);
             ResultSet rs = stmt.executeQuery()) {
            while (rs.next()) {
                Animal a = new Animal();
                a.setId(rs.getInt("Id"));
                a.setEspecie(rs.getString("Especie"));
                a.setDataNascimento(rs.getDate("DataNascimento").toLocalDate());
                a.setSexo(rs.getString("Sexo"));
                a.setCor(rs.getString("Cor"));
                a.setRaca(rs.getString("Raca"));
                a.setPeso(rs.getFloat("Peso"));
                a.setCodigo(rs.getString("Codigo"));
                a.setObservacao(rs.getString("Observacao"));
                lista.add(a);
            }
        }
        return lista;
    }

    public Animal selectById(int id) throws SQLException {
        String sql = "SELECT * FROM animal WHERE Id = ?";
        try (Connection conn = getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setInt(1, id);
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    Animal a = new Animal();
                    a.setId(rs.getInt("Id"));
                    a.setEspecie(rs.getString("Especie"));
                    a.setDataNascimento(rs.getDate("DataNascimento").toLocalDate());
                    a.setSexo(rs.getString("Sexo"));
                    a.setCor(rs.getString("Cor"));
                    a.setRaca(rs.getString("Raca"));
                    a.setPeso(rs.getFloat("Peso"));
                    a.setCodigo(rs.getString("Codigo"));
                    a.setObservacao(rs.getString("Observacao"));
                    return a;
                }
            }
        }
        return null;
    }
}
