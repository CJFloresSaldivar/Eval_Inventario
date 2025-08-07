package com.inventario.inventario.controllers;


import com.inventario.inventario.dao.ProductoDao;
import com.inventario.inventario.dao.UsuarioDao;
import com.inventario.inventario.models.Producto;
import com.inventario.inventario.models.Usuario;
import com.inventario.inventario.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ProductoController {
    @Autowired
    private ProductoDao productoDao;

    @Autowired
    private UsuarioDao usuarioDao;

    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value="api/listaproductos")
    public List<Producto> getProductos( @RequestHeader(value="Authorization") String token){
        String usuarioId= jwtUtil.getKey(token);
        if (usuarioId == null){
            throw new RuntimeException("No autorizado");
        }
        Usuario usuario=usuarioDao.obtenerPorId(Integer.parseInt(usuarioId));
        return productoDao.getProductos(usuario);
    }
    /*
    @RequestMapping(value="api/usuario")
    public List<Usuario> getusuarios(){
        return usuarioDao.getUsuario();
    }
*/


    @RequestMapping(value="api/nuevoproducto/{nombre}")
    public ResponseEntity<String> altaProducto(@RequestBody Producto producto) {
        productoDao.nuevoproducto(producto);
        return ResponseEntity.ok("producto registrado");
    }

    @RequestMapping(value="api/listaproductos/{id}")
    public ResponseEntity<String> modProducto(@PathVariable int id) {
        productoDao.modstatus(id);
        return ResponseEntity.ok("status actualizado");
    }

    @RequestMapping(value="api/productos/cantidad", method = RequestMethod.PUT)
    public ResponseEntity<String> actualizarCantidad(
            @RequestBody Producto producto,
            @RequestHeader(value="Authorization") String token) {
        System.out.printf("0");
        try {
            // Verificar token y obtener usuario
            String usuarioId = jwtUtil.getKey(token);
            System.out.printf("1");
            if (usuarioId == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("No autorizado");
            }


            Usuario usuario = usuarioDao.obtenerPorId(Integer.parseInt(usuarioId));

            productoDao.actualizarCantidad(producto.getIdProducto(), producto.getCantidad(), usuario);
            return ResponseEntity.ok("Cantidad actualizada correctamente");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al actualizar la cantidad: " + e.getMessage());
        }
    }



}
