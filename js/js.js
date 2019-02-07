function write(){ 
  Highcharts.chart('container', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: 'grafik ketinggian benda'
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 75,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#0F0F0F'
    },
    xAxis: {
            title: {
            text: 'waktu'
        },
        categories: kesamping
    },
    yAxis: {
        title: {
            text: 'ketinggian'
        }
    },
    tooltip: {
        shared: true,
        valueSuffix: ' Meter'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'ketinggian',
        data: hasil
    }]
});


Highcharts.chart('velocity', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: 'grafik velocity'
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 75,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#0F0F0F'
    },
    xAxis: {
            title: {
            text: 'waktu'
        },
        categories: kesamping
    },
    yAxis: {
        title: {
            text: 'velocity'
        }
    },
    tooltip: {
        shared: true,
        valueSuffix: ' M/s'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'kecepatan',
        data: kecepatan
    }]
});



Highcharts.chart('percepatan', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: 'grafik percepatan'
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 75,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#0F0F0F'
    },
    xAxis: {
      title: {
            text: 'waktu'
        },
        categories: kesamping
    },
    yAxis: {
        title: {
            text: 'percepatan'
        }
    },
    tooltip: {
        shared: true,
        valueSuffix: ' M/(s*s)'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'percepatan',
        data: percepatan
    }]
});

}

jalan();