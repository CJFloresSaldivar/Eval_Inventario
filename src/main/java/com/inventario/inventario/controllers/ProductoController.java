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
    public List<Producto> getProductos(){
        return productoDao.getProductos();
    }
    /*
    @RequestMapping(value="api/usuario")
    public List<Usuario> getusuarios(){
        return usuarioDao.getUsuario();
    }
*/
    @RequestMapping(value="/apiproducto")
    public List<Producto> getListProducto() {
        List<Producto> productos = new ArrayList<>();
        Producto producto=new Producto();
        producto.setIdProducto(1);
        producto.setNombreProducto("Laptop DELL");
        producto.setCantidad(4);
        producto.setStatus(1);

        Producto producto2=new Producto();
        producto2.setIdProducto(2);
        producto2.setNombreProducto("Laptop ACER");
        producto2.setCantidad(5);
        producto2.setStatus(1);

        Producto producto3=new Producto();
        producto3.setIdProducto(3);
        producto3.setNombreProducto("Laptop HP EliteBook");
        producto3.setCantidad(6);
        producto3.setStatus(0);
        productos.add(producto);
        productos.add(producto2);
        productos.add(producto3);
        return productos;
    }

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


    @RequestMapping(value="api/searchp")
    public Producto searchProducto() {
        Producto producto=new Producto();
        producto.setIdProducto(1);
        producto.setNombreProducto("laptop");
        producto.setCantidad(0);
        producto.setStatus(0);
        return producto;
    }
}
