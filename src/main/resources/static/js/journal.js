

$(document).ready(function() {
    window.history.pushState({}, '', 'journal.html');
    table = $('#journal').DataTable({
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

    const rawResponse = await fetch(`api/listajournal?filter=${filterjournal}`, {
        method: 'GET',
        headers: getHeaders,

    });
    const journals = await rawResponse.json();
    table.clear();


    table.rows.add(journals).draw();


};