package com.inventario.inventario.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private int idUsuario;

    @Column(name = "nombre", length = 100)
    private String nombre;

    @Column(name = "correo", length = 50)
    private String correo;

    @Column(name = "contrasena", length = 60)
    private String contrasena;

    @ManyToOne
    @JoinColumn(name = "id_rol", referencedColumnName = "id_rol")
    private Rol rol;

    @Column(name = "estatus")
    private int estatus;


}
