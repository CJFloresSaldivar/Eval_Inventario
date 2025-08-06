package com.inventario.inventario.dao;

import com.inventario.inventario.models.Journal;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class JournalDaoImp implements JournalDao{
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Journal> getJournal() {
        return entityManager.createQuery("FROM Journal").getResultList();
    }

    @Override
    public List<Journal> getJournalByTipoMovimiento(Journal.TipoMovimiento tipo) {
        String query = "FROM Journal WHERE tipoMovimiento = :tipo";
        return entityManager.createQuery(query, Journal.class)
                .setParameter("tipo", tipo)
                .getResultList();
    }
}
