package com.inventario.inventario.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_producto")
    private int idProducto;

    @Column(name = "nombre_producto", length = 128)
    private String nombreProducto;

    @Column(name = "cantidad")
    private int cantidad;

    @Column(name = "estatus")
    private int status;


}
