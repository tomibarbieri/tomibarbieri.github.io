function print_chart(circuito_id) {

    // console.log(circuito_id);

    $(".circuito-title a").text("Circuito "+circuito_id);
    $(".circuito-title").removeClass("d-none");

    //---------------
    //- VOTES CHART -
    //---------------

    var votos_circuito = votos_por_circuito[circuito_id];

    var valores_lista = []
    
    console.log(votos_por_circuito_listas);
    console.log(votos_circuito);

    votos_por_circuito_listas.forEach(lista => {
        valores_lista.push(votos_circuito[lista])
    });

    var barData = { 
        labels  : votos_por_circuito_listas,
        datasets: [
          {
            label               : 'Votos',
            backgroundColor     : 'rgba(60,141,188,0.9)',
            borderColor         : 'rgba(60,141,188,0.8)',
            pointRadius          : false,
            pointColor          : '#3b8bba',
            pointStrokeColor    : 'rgba(60,141,188,1)',
            pointHighlightFill  : '#fff',
            pointHighlightStroke: 'rgba(60,141,188,1)',
            data                : valores_lista
          }
        ]
      }

    // var barData = { 
    //   labels  : ['Votos aumulados del circuito '+circuito_id],
    //   datasets: [
    //     {
    //       label               : 'Votos FDT',
    //       backgroundColor     : 'rgba(60,141,188,0.9)',
    //       borderColor         : 'rgba(60,141,188,0.8)',
    //       pointRadius          : false,
    //       pointColor          : '#3b8bba',
    //       pointStrokeColor    : 'rgba(60,141,188,1)',
    //       pointHighlightFill  : '#fff',
    //       pointHighlightStroke: 'rgba(60,141,188,1)',
    //       data                : [votos_circuito.votos_fdt]
    //     },
    //     {
    //       label               : 'Votos JxC',
    //       backgroundColor     : 'rgba(244, 202, 5, 1)',
    //       borderColor         : 'rgba(244, 202, 5, 1)',
    //       pointRadius         : false,
    //       pointColor          : 'rgba(244, 202, 5, 1)',
    //       pointStrokeColor    : '#c1c7d1',
    //       pointHighlightFill  : '#fff',
    //       pointHighlightStroke: 'rgba(220,220,220,1)',
    //       data                : [votos_circuito.votos_jxc]
    //     }
    //   ]
    // }

    $('#barChart').remove();
    $('#barChartContainer').append('<canvas id="barChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>');

    var barChartCanvas = $('#barChart').get(0).getContext('2d')

    var barChartOptions = {
      responsive              : true,
      maintainAspectRatio     : false,
      datasetFill             : false,
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
      }
    }

    new Chart(barChartCanvas, {
      type: 'bar',
      data: barData,
      options: barChartOptions
    })


    //---------------
    //- AGES CHART  -
    //---------------

    edades_circuito = edades_por_circuito[circuito_id];

    // console.log(edades_circuito);

    var areaChartData = {
      labels  : ['16-17', '18-30', '31-45', '46-59', '60-69', '+70'],
      datasets: [
        {
          label               : 'Hombres',
          backgroundColor     : 'rgba(60,141,188,0.9)',
          borderColor         : 'rgba(60,141,188,0.8)',
          pointRadius          : false,
          pointColor          : '#3b8bba',
          pointStrokeColor    : 'rgba(60,141,188,1)',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(60,141,188,1)',
          data                : [
            edades_circuito["16-17"]["M"], 
            edades_circuito["18-30"]["M"],
            edades_circuito["31-45"]["M"],
            edades_circuito["46-59"]["M"],
            edades_circuito["60-69"]["M"],
            edades_circuito["+70"]["M"]
          ]
        },
        {
          label               : 'Mujeres',
          backgroundColor     : 'rgba(210, 214, 222, 1)',
          borderColor         : 'rgba(210, 214, 222, 1)',
          pointRadius         : false,
          pointColor          : 'rgba(210, 214, 222, 1)',
          pointStrokeColor    : '#c1c7d1',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data                : [
            edades_circuito["16-17"]["F"], 
            edades_circuito["18-30"]["F"],
            edades_circuito["31-45"]["F"],
            edades_circuito["46-59"]["F"],
            edades_circuito["60-69"]["F"],
            edades_circuito["+70"]["F"]
          ]
        },
      ]
    }

    $('#stackedBarChart').remove();
    $('#ageBarContainer').append('<canvas id="stackedBarChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>');

    var stackedBarChartCanvas = $('#stackedBarChart').get(0).getContext('2d')
    var stackedBarChartData = $.extend(true, {}, areaChartData)

    var stackedBarChartOptions = {
      responsive              : true,
      maintainAspectRatio     : false,
      scales: {
        xAxes: [{
          stacked: true,
        }],
        yAxes: [{
          stacked: true
        }]
      }
    }

    new Chart(stackedBarChartCanvas, {
      type: 'bar',
      data: stackedBarChartData,
      options: stackedBarChartOptions
    })

}