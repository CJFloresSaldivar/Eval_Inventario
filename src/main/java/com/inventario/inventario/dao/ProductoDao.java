package com.inventario.inventario.dao;

import com.inventario.inventario.models.Producto;

import java.util.List;

public interface ProductoDao {
    List<Producto> getProductos();

    void modstatus(int id);

    void nuevoproducto(Producto producto);
    void actualizarCantidad(int id, int nuevaCantidad);
}
