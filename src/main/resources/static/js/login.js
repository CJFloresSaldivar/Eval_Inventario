$(document).ready(function() {
    //on R
});
async function iniciarSesion() {
    let datos = {};
    datos.correo = document.getElementById('InputEmail').value;
    datos.contrasena = document.getElementById('InputPassword').value;


        const request = await fetch('api/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

    const respuesta= await request.json();

    if (respuesta != null){
        localStorage.token = respuesta[0];
        localStorage.emal = datos.correo;
        localStorage.tipo_usuario = respuesta[1];
        window.location.href='productos.html';
    }else{
        alert("Las credenciales son incorrectas. Por favor intente nuevamente");
    }
 };
