$(document).ready(function() {
    cargaJournal ();
    $('#journal').DataTable();
});


function getHeaders(){
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':localStorage.token
    }
}
async function cargaJournal() {

  const rawResponse = await fetch('api/listajournal', {
    method: 'GET',
    headers: getHeaders,
    //buil o update
    //body: JSON.stringify({a: 1, b: 'Textual content'})
  });
  const journals = await rawResponse.json();

  let journalHtml='';
  for (let item of journals){
    let = pHtml=''+
        '       <tr>'+
        '           <th>'+item.idJournal+'</th>'+
        '           <th>'+item.tipoMovimiento+'</th>'+
        '           <th>'+item.cantidadMovimiento+'</th>'+
        '           <th>'+(item.producto ? item.producto.nombre :'' )+'</th>'+
        '           <th>'+(item.usuario ? item.usuario.nombreProducto : '')+'</th>'+
        '           <th>'+item.fecha+'</th>'+
        '           </th>'+
        '       </tr>';
    journalHtml += pHtml;

  }
document.querySelector('#journal tbody').outerHTML=journalHtml;
};
