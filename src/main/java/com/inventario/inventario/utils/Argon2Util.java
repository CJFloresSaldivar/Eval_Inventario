package com.inventario.inventario.utils;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;

public class Argon2Util {
    private static final Argon2 argon2 = Argon2Factory.create();

    public static String hash(String password) {
        // Parámetros: iteraciones, memoria, paralelismo, longitud del hash
        return argon2.hash(1, 1024, 1, password.toCharArray());
    }

    public static boolean verify(String hash, String password) {
        return argon2.verify(hash, password.toCharArray());
    }
}
