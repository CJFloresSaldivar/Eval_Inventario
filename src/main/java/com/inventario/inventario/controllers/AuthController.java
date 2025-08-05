package com.inventario.inventario.controllers;

import com.inventario.inventario.dao.UsuarioDao;
import com.inventario.inventario.models.Usuario;
import com.inventario.inventario.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class AuthController {

    @Autowired
    private UsuarioDao usuarioDao;

    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value="api/login", method = RequestMethod.POST)
    public List<String> login(@RequestBody Usuario usuario) {
        Usuario verificado=usuarioDao.verificarEmailPass(usuario);
        List<String> respuestas= new ArrayList<>();
        if(verificado != null){
            String tokenJwt = jwtUtil.create(String.valueOf( verificado.getIdUsuario()), verificado.getCorreo()    );
            respuestas.add(tokenJwt);
            respuestas.add(String.valueOf( verificado.getRol()));
            return respuestas;
        }
        return null;
    }
}
