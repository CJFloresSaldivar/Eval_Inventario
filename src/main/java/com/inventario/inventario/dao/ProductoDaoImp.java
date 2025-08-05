package com.inventario.inventario.dao;

import com.inventario.inventario.models.Journal;
import com.inventario.inventario.models.Producto;
import com.inventario.inventario.models.Usuario;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.PersistenceException;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class ProductoDaoImp implements ProductoDao {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    @Transactional
    public List<Producto> getProductos() {
        return entityManager.createQuery("FROM Producto").getResultList();
    }

    /*
    @Override
    @Transactional
    public List<Usuario> getUsuarios() {
        return entityManager.createQuery("FROM Usuario").getResultList();
    }
    */
    @Override
    public void modstatus(int id) {

        Producto producto =entityManager.find(Producto.class,id);
        if (producto != null){

            String qry="UPDATE Producto p SET status= "+
                        "CASE "+
                        "WHEN status = 1 THEN 0 "+
                        "ELSE 1 "+
                        "END "+
                        "WHERE p.idProducto = :id";

            entityManager.createQuery(qry)
            .setParameter("id", id)
            .executeUpdate();
        }
    }

    @Override
    public void nuevoproducto(Producto producto) {
        try {
            // Validación básica
            if (producto.getNombreProducto() == null || producto.getNombreProducto().trim().isEmpty()) {
                throw new IllegalArgumentException("El nombre del producto no puede estar vacío");
            }

            if (producto.getCantidad() < 0) {
                throw new IllegalArgumentException("La cantidad no puede ser negativa");
            }

            // Persistencia del producto
            entityManager.persist(producto);

            // Forzar flush para detectar errores inmediatamente
            entityManager.flush();

        } catch (PersistenceException e) {
            // Manejo específico de errores de persistencia
            throw new DataAccessException("Error al guardar el producto en la base de datos", e) {};
        }
    }

    @Override
    public void actualizarCantidad(int id, int nuevaCantidad, Usuario usuario) {
        try {
            if (nuevaCantidad < 0) {
                throw new IllegalArgumentException("La cantidad no puede ser negativa");
            }

            Producto producto = entityManager.find(Producto.class, id);
            if (producto == null) {
                throw new IllegalArgumentException("Producto no encontrado con ID: " + id);
            }

            Journal.TipoMovimiento tipoMovimiento;
            if (nuevaCantidad > producto.getCantidad()) {
                tipoMovimiento = Journal.TipoMovimiento.E; // Entrada
            } else if (nuevaCantidad < producto.getCantidad()) {
                tipoMovimiento = Journal.TipoMovimiento.S; // Salida
            } else {
                // No hay cambio en la cantidad, no se registra movimiento
                return;
            }

            producto.setCantidad(nuevaCantidad);
            entityManager.merge(producto);

            // Actualizar la cantidad del producto
            producto.setCantidad(nuevaCantidad);
            entityManager.merge(producto);

            // Crear y persistir el registro en journal
            Journal journalEntry = new Journal();
            journalEntry.setProducto(producto);
            journalEntry.setTipoMovimiento(tipoMovimiento);
            journalEntry.setUsuario(usuario);

            entityManager.persist(journalEntry);



            entityManager.flush();
        } catch (PersistenceException e) {
            throw new DataAccessException("Error al actualizar la cantidad del producto", e) {};
        }
    }

}
