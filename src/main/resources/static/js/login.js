$(document).ready(function() {
    //on R
});
async function iniciarSesion() {
    let datos = {};
    datos.correo = document.getElementById('InputEmail').value;
    datos.contrasena = document.getElementById('InputPassword').value;

    try {
        const request = await fetch('api/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        const respuesta= await request.json();

        if (Object.keys(respuesta).length != 0){

            localStorage.token = respuesta[0];
            localStorage.emal = datos.correo;
            localStorage.tipo_usuario = respuesta[1];

            const rolString = respuesta[1];
            const idRol = rolString.split("idRol=")[1].split(",")[0];

            generatePage('index',localStorage.emal, idRol);
            //window.location.href='productos.html';
        }else{
            alert("Las credenciales son incorrectas. Por favor intente nuevamente");
        }
    }catch (error) {
        alert("Las credenciales son incorrectas. Por favor intente nuevamente");
             console.error("Error:", error);
     }
 };

 window.generatePage = function(page,usuario,rol) {
        switch(page){
            case 'index':
                import('./html/index_html.js')
                 .then(module => {
                     // Llamar a la función principal de index.js
                     module.generarPaginaIndex(usuario,rol);
                 })
                 .catch(err => {
                     console.error("Error al cargar index.js:", err);
                 });

                 break;
            case 'productos':
                import('./html/productos_html.js')
                 .then(module => {
                     // Llamar a la función principal de index.js
                     module.generarPaginaProductos(usuario,rol);
                 })
                 .catch(err => {
                     console.error("Error al cargar index.js:", err);
                 });
                break;
            case 'journal':
                import('./html/journal_html.js')
                 .then(module => {
                     // Llamar a la función principal de index.js
                     module.generarPaginaJournal(usuario,rol);
                 })
                 .catch(err => {
                     console.error("Error al cargar index.js:", err);
                 });
                break;

         }
 }
