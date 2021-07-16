
// var votos_por_circuito = general2019_presidente_vs;
// var votos_por_circuito_listas = general2019_presidente_vs_listas;

var votos_por_circuito = paso2019_intendente_interna;
var votos_por_circuito_listas = paso2019_intendente_interna_listas;


function cambiar_eleccion() {

    var eleccion = $("#select-eleccion :selected").val();
    var cuerpo = $("#select-cuerpo :selected").val();
    var criterio = $("#select-criterio :selected").val();

    var data_eleccion = estructura_elecciones[eleccion][cuerpo][criterio] 

    if (data_eleccion != undefined) {
        votos_por_circuito = data_eleccion['data'];
        votos_por_circuito_listas = data_eleccion['header'];
    
        loadMap(data_eleccion['default_base'], data_eleccion['default_total']);
        loadTableData();
        print_chart("0497A");
    } else {
        $(document).Toasts('create', {
            class: 'bg-warning',
            title: 'Criterio incorrecto',
            autohide: true,
            subtitle: 'No valido',
            body: 'No existe el criterio elegido para la eleccion o cuerpo.'
        })
    }
  
}