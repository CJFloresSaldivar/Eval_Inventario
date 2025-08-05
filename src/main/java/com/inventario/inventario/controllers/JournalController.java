package com.inventario.inventario.controllers;

import com.inventario.inventario.dao.JournalDao;
import com.inventario.inventario.models.Journal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class JournalController {
    @Autowired
    private JournalDao journalDao;



    @RequestMapping (value="api/listajournal")
    public List<Journal> getJournal(){
        return  journalDao.getJournal();
    }
}
