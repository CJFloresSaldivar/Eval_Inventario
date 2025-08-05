package com.inventario.inventario.controllers;

import com.inventario.inventario.dao.UsuarioDao;
import com.inventario.inventario.models.Usuario;
import com.inventario.inventario.utils.JWTUtil;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UsuarioController {
    @Autowired
    private UsuarioDao usuarioDao;

    @Autowired
    private JWTUtil jwtUtil;

    private boolean validartoken(String token){
        String usuarioId = jwtUtil.getKey(token);
        return usuarioId != null;
    }

    @RequestMapping(value="api/usuario")
    public List<Usuario> getUsuarios(@RequestHeader(value="Authorization") String token){
        String usuarioId = jwtUtil.getKey(token);
        if (usuarioId == null){
            return new ArrayList<>();
        }
        return usuarioDao.getUsuarios();
    }



    @RequestMapping(value = "api/new_usuario", method = RequestMethod.POST)
    public void crearUsuario(@RequestBody Usuario usuario) {
        Argon2 argon2 =Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        String hash= argon2.hash(1,1024,1, usuario.getContrasena());
        usuario.setContrasena(hash);

        usuarioDao.registrar(usuario);
    }


}
