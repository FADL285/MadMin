window.onload = function () {
  var chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: 'Daily Visitors',
    },
    axisY: {
      includeZero: false,
    },
    data: [
      {
        type: 'line',
        indexLabelFontSize: 16,
        dataPoints: [
          { y: 450 },
          { y: 414 },
          {
            y: 520,
            indexLabel: '\u2191 highest',
            markerColor: 'red',
            markerType: 'triangle',
          },
          { y: 460 },
          { y: 450 },
          { y: 500 },
          { y: 480 },
          { y: 480 },
          {
            y: 410,
            indexLabel: '\u2193 lowest',
            markerColor: 'DarkSlateGrey',
            markerType: 'cross',
          },
          { y: 500 },
          { y: 480 },
          { y: 510 },
        ],
      },
    ],
  });
  //! Wait for 1 second for preloader
  this.setTimeout(function () {
    chart.render();
  }, 1000);
};
