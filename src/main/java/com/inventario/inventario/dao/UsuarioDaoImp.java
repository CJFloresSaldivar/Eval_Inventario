package com.inventario.inventario.dao;

import com.inventario.inventario.models.Usuario;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityTransaction;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class UsuarioDaoImp implements  UsuarioDao{

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    @Transactional
    public List<Usuario> getUsuarios() {
        /*List <Usuario> usuarios=entityManager.createQuery("FROM Usuario u LEFT JOIN FETCH u.rol", Usuario.class).getResultList();
        for (Usuario usuario : usuarios){
            Argon2 argon2 =Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
            String hash= argon2.hash(1,1024,1, usuario.getContrasena());
            System.out.println(usuario.getIdUsuario()+hash);
        }
        return usuarios;*/
        return entityManager.createQuery("FROM Usuario u LEFT JOIN FETCH u.rol", Usuario.class).getResultList();
    }

    @Override
    public Usuario verificarEmailPass(Usuario usuario) {

        String qry="FROM Usuario WHERE correo = :correo ";
        List<Usuario> lista = entityManager.createQuery(qry)
                .setParameter("correo", usuario.getCorreo())
                .getResultList();
        if(lista.isEmpty()){
            return null;
        }
        String passHashed = lista.get(0).getContrasena();

        Argon2 argon2= Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        if(argon2.verify(passHashed,usuario.getContrasena())) {
            return lista.get(0);
        }
        return null;
    }

    @Override
    public void registrar(Usuario usuario) {
        entityManager.merge(usuario);
    }


}
