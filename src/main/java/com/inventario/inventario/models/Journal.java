package com.inventario.inventario.models;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "journal")
public class Journal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_journal")
    private int idJournal;

    @Enumerated(EnumType.STRING)
    @Column(name = "tipo_movimiento", columnDefinition = "ENUM('E','S')")
    private TipoMovimiento tipoMovimiento;

    @ManyToOne
    @JoinColumn(name = "id_producto", referencedColumnName = "id_producto")
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "id_usuario", referencedColumnName = "id_usuario")
    private Usuario usuario;

    @Column(name = "fecha", columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime fecha;

    // Enumeración para los tipos de movimiento
    public enum TipoMovimiento {
        E, S
    }

}