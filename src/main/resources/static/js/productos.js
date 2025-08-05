// Call the dataTables jQuery plugin
$(document).ready(function() {
    nuevoProducto();
    document.getElementById('guardarProducto').addEventListener('click', altaProducto);

    $('#confirmarCantidad').click(function() {
        const nueva_cantidad = parseInt($('#cantidadInput').val());
        const cantidad_actual = parseInt($('#cantidadActualHidden').val());
        const id_producto=$('#id_producto').val();
        if (nueva_cantidad < cantidad_actual) {
            $('#cantidadError').removeClass('d-none');
            return;
        } else {
            $('#cantidadError').addClass('d-none');
        }
        console.log("Nueva cantidad:", {
            id: $('#id_producto').val(),
            nueva_cantidad: nueva_cantidad
        });
        actualizarCantidad(id_producto, nueva_cantidad);
        $('#producto_plusModal').modal('hide');
    });

    cargaProducto ();
    $('#productos').DataTable();
});
function getHeaders(){
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':localStorare.token
    }
}

async function cargaProducto() {

  const rawResponse = await fetch('api/listaproductos', {
    method: 'GET',
    headers: getHeaders,
    //buil o update
    //body: JSON.stringify({a: 1, b: 'Textual content'})
  });
  const productos = await rawResponse.json();

  let productoHtml='';
  for (let item of productos){
    let = pHtml=''+
        '       <tr>'+
        '           <th>'+item.idProducto+'</th>'+
        '           <th>'+item.nombreProducto+'</th>'+
        '           <th><div class="row" justify-content-center>'+
        '               <div class="col-md-6"><div class="text-center">'+
        '                   '+item.cantidad+
        '               </div></div>'+
        '               <div class="col-md-6"><div class="text-left">'+
        '                   '+load_btn_plus(item.idProducto,item.cantidad)+
        '               </div></div>'+
        '           </div></th>'+
        '           <th>'+cargarStatus(item.status,item.idProducto)+
        '           </th>'+
        '       </tr>';
    productoHtml += pHtml;

  }

  document.querySelector('#productos tbody').outerHTML=productoHtml;
};

async function changeStatus(id){
  try {
        const rawResponse = await fetch('api/listaproductos/'+id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (!rawResponse.ok){
          alert("Error al actualizar el estado");
      }else{
        changebtn(id);
      }
  } catch (error) {
          console.error("Error:", error);
  }

};

async function altaProducto() {
    const nombre = document.getElementById('nombreProducto').value;
    const cantidad = document.getElementById('cantidad').value;
    const status = document.getElementById('status').value;

    if (!nombre || !cantidad) {
        //alert("Todos los campos son obligatorios");
        return;
    }

    try {
        const response = await fetch('api/nuevoproducto/'+nombre, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombreProducto: nombre,
                cantidad: cantidad,
                status: status
            })
        });

        if (response.ok) {
            alert("Producto registrado correctamente");
            $('#productoModal').modal('hide'); // Cierra el modal
            cargaProducto(); // Recarga la tabla
            document.getElementById('formProducto').reset(); // Limpia el formulario
        } else {
            alert("Error al registrar el producto");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

async function actualizarCantidad(id, nuevaCantidad) {
    try {
        const response = await fetch('api/productos/cantidad', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idProducto: id,
                cantidad: nuevaCantidad
            })
        });

        if (response.ok) {
            $('#producto_plusModal').modal('hide');
            cargaProducto(); // Recargar la tabla para ver los cambios
        } else {
            const errorData = await response.json();
            alert("Error al actualizar la cantidad: " + (errorData.message || "Error desconocido"));
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error al conectar con el servidor");
    }
}

//FUNCIONES objetos CSS
function load_btn_plus(id,cantidad){
    let btn_plus= '               <a href="#" ><button name="btn_plus" onclick="producto_plus_mod('+id+','+cantidad+')" type="button" class="btn btn-circlep btn-light-blue" >'+
                  '                  <i class="fas fa-plus"></i>'+
                  '               </button></a>';
    return btn_plus;
};
function cargarStatus(status,id){
    let reStatus='';
    if(status){
        reStatus='             <div class="text-center">'+
                 '               <a href="#" alt="HABILITADO" name="btn'+id+'" onclick="changeStatus('+id+')" class="btn btn-success btn-circle btn-sm">'+
                 '                  <i class="fas fa-check"></i>'+
                 '               </a>'
                 '             </div>';
    }else{
        reStatus='             <div class="text-center">'+
                 '             <a href="#" alt="DESHABILITADO" name="btn'+id+'" onclick="changeStatus('+id+')" class="btn btn-warning btn-circle btn-sm">'+
                 '                   <i class="fas fa-exclamation-triangle"></i>'+
                 '                </a>'+
                 '           </th>'+
                 '             </div>';
    }

    return reStatus;
};
function changebtn(id) {
    const button = document.querySelector(`a[name="btn${id}"]`);

    // Cambiar de 'btn-warning' a 'btn-success' y viceversa
    if (button.classList.contains('btn-warning')) {
        button.classList.remove('btn-warning');
        button.classList.add('btn-success');
        // También podrías cambiar el icono si es necesario
        button.querySelector('i').className = 'fas fa-check';
    } else {
        button.classList.remove('btn-success');
        button.classList.add('btn-warning');
        button.querySelector('i').className = 'fas fa-exclamation-triangle';
    }
};
function nuevoProducto(){
    $('#nuevo_producto').click(function() {
        $('#productoModal').modal('show'); // Muestra el modal
    });

    $('#guardarProducto').click(function() {
        const nombre = $('#nombreProducto').val();
        const cantidad = 0;
        const status = 1;

        if (!nombre ) {
            alert("escriba el nombre del producto");
            return;
        }
        console.log("Producto a guardar:", { nombre, cantidad, status });
    });

};
function producto_plus_mod(id,cantidad_actual){
        document.getElementById('cantidadActualText').innerHTML=cantidad_actual;
        document.getElementById('id_producto').value=id;
        document.getElementById('cantidadActualHidden').value=cantidad_actual;
        document.getElementById('cantidadInput').value=cantidad_actual;
        $('#producto_plusModal').modal('show');

}