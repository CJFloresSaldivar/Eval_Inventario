package com.inventario.inventario.controllers;

import com.inventario.inventario.models.Journal;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JournalController {
    @RequestMapping (value="api/journal")
    public Journal getJournal(){
        Journal journal = new Journal();
        String dateTime="2020-12-12 01:24:23";
        java.sql.Timestamp timestamp = java.sql.Timestamp.valueOf(dateTime);
        journal.setIdJournal(1);
        journal.setTipoMovimiento(Journal.TipoMovimiento.valueOf("S"));
        journal.setFecha(timestamp.toLocalDateTime());
        return journal;
    }
}
