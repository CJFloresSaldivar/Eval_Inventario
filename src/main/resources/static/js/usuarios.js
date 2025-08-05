// Call the dataTables jQuery plugin
$(document).ready(function() {

  cargaUsuarios();
  $('#usuarios').DataTable();

  $('#guardarUsuario').click(async function() {
          const usuario = {
              nombre: $('#nombre').val(),
              correo: $('#correo').val(),
              contrasena: $('#contrasena').val(),
              rol: { idRol: $('#rol').val() }
          };


              const response = await fetch('api/new_usuario', {
                  method: 'POST',
                  headers: {
                       'Accept': 'application/json',
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(usuario)
              });

              if (response.ok) {
                  $('#usuarioModal').modal('hide');
                  $('#usuarioForm')[0].reset();
                  cargaUsuarios(); // Recargar la tabla
                  alert('Usuario creado exitosamente');
              } else {
                  const error = await response.json();
                  alert('Error: ' + error.message);
              }

      });
});

function getHeaders(){
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':localStorare.token
    }
}
async function cargaUsuarios() {

  const rawResponse = await fetch('api/usuario', {
    method: 'GET',
    headers: getHeaders,
    //buil o update
    //body: JSON.stringify({a: 1, b: 'Textual content'})
  });
  const usuarios = await rawResponse.json();

  let usuarioHtml='';
  for (let item of usuarios){
    let = pHtml=''+
        '       <tr>'+
        '           <th>'+item.idUsuario+'</th>'+
        '           <th>'+item.nombre+'</th>'+
        '           <th>'+item.correo+'</th>'+
        '           <th>'+item.contrasena+'</th>'+
        '           <th>'+(item.rol ? item.rol.nombreRol : 'Sin rol')+'</th>'+
        '       </tr>';
    usuarioHtml += pHtml;

  }

    document.querySelector('#usuarios tbody').outerHTML=usuarioHtml;
};