package com.inventario.inventario.dao;

import com.inventario.inventario.models.Usuario;

import java.util.List;

public interface UsuarioDao {

    List<Usuario> getUsuarios();
    Usuario verificarEmailPass (Usuario usuario);

    void registrar(Usuario usuario);
}
