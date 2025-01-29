package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.model.usuario;
import com.example.demo.repository.UsuarioRepository;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*") // Permitir acceso desde el frontend
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;


    // Obtener todos los usuarios
    @GetMapping
    public List<usuario> obtenerUsuarios() {
        return usuarioRepository.findAll();
    }

    // Manejar solicitudes preflight
    @RequestMapping(method = RequestMethod.OPTIONS)
    public ResponseEntity<?> handleOptions() {
        return ResponseEntity.ok().build();
    }

    // Obtener un usuario por ID
    @GetMapping("/{id}")
    public usuario obtenerUsuario(@PathVariable Long id) {
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuario no encontrado"));
    }

    // Agregar un nuevo usuario
    @PostMapping
    public usuario agregarUsuario(@RequestBody usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    // Editar un usuario existente
    @PutMapping("/{id}")
    public usuario editarUsuario(@PathVariable Long id, @RequestBody usuario usuario) {
        if (!usuarioRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Usuario no encontrado");
        }

        usuario.setId(id); // Establece el ID del usuario que se está editando
        return usuarioRepository.save(usuario);
    }

    // Eliminar un usuario
    @DeleteMapping("/{id}")
    public void eliminarUsuario(@PathVariable Long id) {
        usuarioRepository.deleteById(id);
    }
}
