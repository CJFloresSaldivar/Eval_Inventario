$(document).ready(function() {


    const filtrojournal = document.getElementById('filtro_journal');
    if (filtrojournal) {
        filtrojournal.addEventListener('change', function() {
            const valorSeleccionado = this.value;
            cargaJournal(valorSeleccionado, table);
        });
    }


    cargaJournal ();
    //$('#journal').DataTable();


});

document.addEventListener('DOMContentLoaded',function() {
    const filtrojournal = document.getElementById('filtro_journal');

    if (filtrojournal){
        filtrojournal.addEventListener('change',function() {
            const valorSeleccionado = this.value;
            $('#journal').DataTable().destroy();
            /*if ($.fn.DataTable.isDataTable('#journal')) {
                $('#journal').DataTable().destroy();
            }*/
            cargaJournal(valorSeleccionado);
        });
    }
});


function getHeaders(){
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':localStorage.token
    }
}
async function cargaJournal(filterjournal='A') {
    const table = $('#journal').DataTable({
                // Configuración inicial
                columns: [
                    { data: 'idJournal' },
                    { data: 'tipoMovimiento' },
                    { data: 'cantidadMovimiento' },
                    { data: 'producto.nombreProducto' },
                    { data: 'usuario.nombre' },
                    { data: 'fecha' }
                ]
            });

    const rawResponse = await fetch(`api/listajournal?filter=${filterjournal}`, {
        method: 'GET',
        headers: getHeaders,

    });
    const journals = await rawResponse.json();
    table.clear();

    // Añade los nuevos datos
    table.rows.add(journals).draw();

    /*let journalHtml='';
    for (let item of journals){
        let = pHtml=''+
            '       <tr>'+
            '           <th>'+item.idJournal+'</th>'+
            '           <th>'+item.tipoMovimiento+'</th>'+
            '           <th>'+item.cantidadMovimiento+'</th>'+
            '           <th>'+(item.producto ? item.producto.nombreProducto :'' )+'</th>'+
            '           <th>'+(item.usuario ? item.usuario.nombre : '')+'</th>'+
            '           <th>'+item.fecha+'</th>'+
            '           </th>'+
            '       </tr>';
        journalHtml += pHtml;
    }

    document.querySelector('#journal tbody').outerHTML=journalHtml;
    */
};