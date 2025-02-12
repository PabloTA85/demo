package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<usuario, Long> {
    // Puedes agregar consultas personalizadas aquí si es necesario
}
