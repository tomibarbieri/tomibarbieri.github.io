


function loadMap(lista_principal, lista_total) {

  $(".map-title a").text("Escala: " + lista_principal + "/" + lista_total);
  $(".map-title").removeClass("d-none");

  $('#map').remove();
  $('#map-container').append('<div id="map" class="leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom" tabindex="0" style="position: relative; outline: none;"><div class="leaflet-pane leaflet-map-pane" style="transform: translate3d(16px, 53px, 0px);"><div class="leaflet-pane leaflet-tile-pane"><div class="leaflet-layer " style="z-index: 1; opacity: 1;"><div class="leaflet-tile-container leaflet-zoom-animated" style="z-index: 17; transform: translate3d(-306px, -250px, 0px) scale(2);"></div><div class="leaflet-tile-container leaflet-zoom-animated" style="z-index: 18; transform: translate3d(-306px, -250px, 0px) scale(1);"></div></div></div><div class="leaflet-pane leaflet-shadow-pane"></div><div class="leaflet-pane leaflet-overlay-pane"><svg pointer-events="none" class="leaflet-zoom-animated" width="720" height="480" viewBox="-76 -93 720 480" style="transform: translate3d(-76px, -93px, 0px);"><g><path class="leaflet-interactive" stroke="#000" stroke-opacity="1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="#ff7800" fill-opacity="0.8" fill-rule="evenodd" d="M293,175a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 "></path><path class="leaflet-interactive" stroke="#000" stroke-opacity="1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="#ff7800" fill-opacity="0.8" fill-rule="evenodd" d="M311,127a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 "></path><path class="leaflet-interactive" stroke="#000" stroke-opacity="1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="#ff7800" fill-opacity="0.8" fill-rule="evenodd" d="M333,216a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 "></path><path class="leaflet-interactive" stroke="#000" stroke-opacity="1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="#ff7800" fill-opacity="0.8" fill-rule="evenodd" d="M337,133a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 "></path><path class="leaflet-interactive" stroke="#000" stroke-opacity="1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="#ff7800" fill-opacity="0.8" fill-rule="evenodd" d="M369,166a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 "></path><path class="leaflet-interactive" stroke="#000" stroke-opacity="1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="#ff7800" fill-opacity="0.8" fill-rule="evenodd" d="M392,234a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 "></path><path class="leaflet-interactive" stroke="#000" stroke-opacity="1" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="#ff7800" fill-opacity="0.8" fill-rule="evenodd" d="M0 0"></path><path class="leaflet-interactive" stroke="#999" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="#B0DE5C" fill-opacity="0.8" fill-rule="evenodd" d="M249 172L216 189L175 228L160 239L184 271L211 274L288 274L292 272L297 254L291 241L288 227L288 213L285 202L278 190zM257 229L264 241L274 235L266 224zM190 285L190 297L220 295L279 298L295 297L295 286L237 285z"></path><path class="leaflet-interactive" stroke="#3388ff" stroke-opacity="1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M260 73L290 103"></path><path class="leaflet-interactive" stroke="#3388ff" stroke-opacity="1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" d="M320 135L452 267"></path></g></svg></div><div class="leaflet-pane leaflet-marker-pane"></div><div class="leaflet-pane leaflet-tooltip-pane"></div><div class="leaflet-pane leaflet-popup-pane"></div><div class="leaflet-proxy leaflet-zoom-animated" style="transform: translate3d(873798px, 1.59169e+06px, 0px) scale(8192);"></div></div><div class="leaflet-control-container"><div class="leaflet-top leaflet-left"><div class="leaflet-control-zoom leaflet-bar leaflet-control"><a class="leaflet-control-zoom-in" href="https://leafletjs.com/examples/geojson/example.html#" title="Zoom in" role="button" aria-label="Zoom in">+</a><a class="leaflet-control-zoom-out" href="https://leafletjs.com/examples/geojson/example.html#" title="Zoom out" role="button" aria-label="Zoom out">−</a></div></div><div class="leaflet-top leaflet-right"></div><div class="leaflet-bottom leaflet-left"></div><div class="leaflet-bottom leaflet-right"><div class="leaflet-control-attribution leaflet-control"> </div></div></div></div>');

  var map = L.map('map').setView([-34.92146635625465, -57.95416796413031], 10);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
  }).addTo(map);

    /*Legend specific*/
  var legend = L.control({ position: "bottomleft" });

  legend.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend");
    div.innerHTML += "<h4>Escala</h4>";
    div.innerHTML += '<i style="background: #e1ecf2"></i><span>0-10</span><br>';
    div.innerHTML += '<i style="background: #ccdfeb"></i><span>10-20</span><br>';
    div.innerHTML += '<i style="background: #BDD7E7"></i><span>20-30</span><br>';
    div.innerHTML += '<i style="background: #6BAED6"></i><span>30-40</span><br>';
    div.innerHTML += '<i style="background: #3182BD"></i><span>40-50</span><br>';
    div.innerHTML += '<i style="background: #08519C"></i><span>50-60</span><br>';
    div.innerHTML += '<i style="background: #074687"></i><span>60-70</span><br>';
    div.innerHTML += '<i style="background: #00356b"></i><span>70-80</span><br>';

    return div;
  };

  legend.addTo(map);

  L.geoJSON(circuitos_lp, {
    style: function (feature) {

        var circuito = new String(feature.properties.circuito_id);
        var votos_circuito = votos_por_circuito[circuito]

        var color = getMapColor(votos_circuito[lista_principal]/votos_circuito[lista_total]*10)

        return {
          color: color,
          weight: 2,
          opacity: 0.8,
          fillOpacity: 0.5
        };
    }
  }).on('click', function(e) {
      print_chart(new String(e.layer.feature.properties.circuito_id));
  }).bindPopup(function (layer) {

      var circuito = new String(layer.feature.properties.circuito_id);
      var votos_circuito = votos_por_circuito[circuito]

      var text = "<b>Circuito: - " + circuito + "</b><br>"; 

      votos_por_circuito_listas.forEach(lista => {
  
        text += "" + lista + ": "+ votos_circuito[lista] + "<br>";
        // "Votos del FDT - " + votos_circuito.votos_fdt + " (" + Math.trunc(votos_circuito.votos_fdt/votos_circuito.votos_totales*100) + "%)<br>" +

      });

      text += "<button onclick='print_chart(\""+ circuito +"\")'>Ver gráfico</button>";
      return text;

  }).addTo(map);
    
};

function loadTableData() {

  $('#table-container').html("");
  $('#table-container').append('<table id="table-general" class="table table-bordered table-striped"><thead></thead><tbody></tbody></table>');
  
  var table = document.getElementById("table-general");
  
  var text_table = '';

  text_head = "<tr><th>#Circuito</th>"

  votos_por_circuito_listas.forEach(lista => {
  
    text_head += "<th>"+ lista + "</th>" 
    // + "<th>%"+ lista + "/total</th>"
     
  });

  text_head += "</tr>";
  table.childNodes[0].innerHTML = text_head;

  var text_table = "";
  
  datos_circuitos.forEach(circuito => {
  
    var circuito = new String(circuito.properties.circuito_id);
    var votos_circuito = votos_por_circuito[circuito] 
    // console.log(circuito);
    text_table += "<tr>" + "<td onclick='print_chart("+circuito+")'>#"+ circuito + "</td>";
    
    votos_por_circuito_listas.forEach(lista => {
      text_table += "<td>"+ votos_circuito[lista] +"</td>";
      // "<td><span class='badge bg-primary'>" + Math.trunc(votos_circuito.votos_fdt/votos_circuito.votos_totales*100) + "%" + "</span></td>" +
    });
   
    text_table += "</tr>"; 
  });
  
  table.childNodes[1].innerHTML = text_table;

  // inicializacion de tabla dinamica
  $("#table-general").DataTable({
    "responsive": true, "lengthChange": false, "autoWidth": false, "ordering": true, "paging": true,
    "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
  }).buttons().container().appendTo('#table-general_wrapper .col-md-6:eq(0)');

}





// Initialization

$( document ).ready(function() {

  loadMap("votos_totales_fdt", "votos_totales");
  loadTableData();
  print_chart("0497A");

});

