function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  window.onload = function() {

    var chart = new CanvasJS.Chart("chartContainer", {
      theme:"light2",
      animationEnabled: true,
      title:{
        text: "متغيرات القياس في الدفيئة الزراعية"
      },
      axisY :{
        title: "Number of Viewers",
        suffix: "mn"
      },
      toolTip: {
        shared: "true"
      },
      legend:{
        cursor:"pointer",
        itemclick : toggleDataSeries
      },
      data: [{
        type: "spline",
        visible: false,
        showInLegend: true,
        yValueFormatString: "##.00mn",
        name: "Season 1",
        dataPoints: [
          { label: "day. 1", y: 2.22 },
          { label: "day. 2", y: 2.20 },
          { label: "day. 3", y: 2.44 },
          { label: "day. 4", y: 2.45 },
          { label: "day. 5", y: 2.58 },
          { label: "day. 6", y: 2.44 },
          { label: "day. 7", y: 2.40 },
          { label: "day. 8", y: 2.72 },
          { label: "day. 9", y: 2.66 },
          { label: "day. 10", y: 3.04 }
        ]
      },
      {
        type: "spline", 
        showInLegend: true,
        visible: false,
        yValueFormatString: "##.00mn",
        name: "Season 2",
        dataPoints: [
          { label: "day. 1", y: 3.86 },
          { label: "day. 2", y: 3.76 },
          { label: "day. 3", y: 3.77 },
          { label: "day. 4", y: 3.65 },
          { label: "day. 5", y: 3.90 },
          { label: "day. 6", y: 3.88 },
          { label: "day. 7", y: 3.69 },
          { label: "day. 8", y: 3.86 },
          { label: "day. 9", y: 3.38 },
          { label: "day. 10", y: 4.20 }
        ]
      },
      {
        type: "spline",
        visible: false,
        showInLegend: true,
        yValueFormatString: "##.00mn",
        name: "Season 3",
        dataPoints: [
          { label: "day. 1", y: 4.37 },
          { label: "day. 2", y: 4.27 },
          { label: "day. 3", y: 4.72 },
          { label: "day. 4", y: 4.87 },
          { label: "day. 5", y: 5.35 },
          { label: "day. 6", y: 5.50 },
          { label: "day. 7", y: 4.84 },
          { label: "day. 8", y: 4.13 },
          { label: "day. 9", y: 5.22 },
          { label: "day. 10", y: 5.39 }
        ]
      },
      {
        type: "spline",
            visible: false,
        showInLegend: true,
        yValueFormatString: "##.00mn",
        name: "Season 4",
        dataPoints: [
          { label: "day. 1", y: 6.64 },
          { label: "day. 2", y: 6.31 },
          { label: "day. 3", y: 6.59 },
          { label: "day. 4", y: 6.95 },
          { label: "day. 5", y: 7.16 },
          { label: "day. 6", y: 6.40 },
          { label: "day. 7", y: 7.20 },
          { label: "day. 8", y: 7.17 },
          { label: "day. 9", y: 6.95 },
          { label: "day. 10", y: 7.09 }
        ]
      },
      {
        type: "spline", 
        showInLegend: true,
        yValueFormatString: "##.00mn",
        name: "Season 5",
        dataPoints: [
          { label: "day. 1", y: 8 },
          { label: "day. 2", y: 6.81 },
          { label: "day. 3", y: 6.71 },
          { label: "day. 4", y: 6.82 },
          { label: "day. 5", y: 6.56 },
          { label: "day. 6", y: 6.24 },
          { label: "day. 7", y: 5.40 },
          { label: "day. 8", y: 7.01 },
          { label: "day. 9", y: 7.14 },
          { label: "day. 10", y: 8.11 }
        ]
      },
      {
        type: "spline", 
        showInLegend: true,
        yValueFormatString: "##.00mn",
        name: "Season 6",
        dataPoints: [
          { label: "day. 1", y: 7.94 },
          { label: "day. 2", y: 7.29 },
          { label: "day. 3", y: 7.28 },
          { label: "day. 4", y: 7.82 },
          { label: "day. 5", y: 7.89 },
          { label: "day. 6", y: 6.71 },
          { label: "day. 7", y: 7.80 },
          { label: "day. 8", y: 7.60 },
          { label: "day. 9", y: 7.66 },
          { label: "day. 10", y: 8.89 }
        ]
      },       {
        type: "spline", 
        showInLegend: true,
        yValueFormatString: "##.00mn",
        name: "Season 7",
        dataPoints: [
          { label: "day. 1", y: 10.11 },
          { label: "day. 2", y: 9.27 },
          { label: "day. 3", y: 9.25 },
          { label: "day. 4", y: 10.17 },
          { label: "day. 5", y: 10.72 },
          { label: "day. 6", y: 10.24 },
          { label: "day. 7", y: 12.07 }
        ]
      },
      
              {
        type: "spline", 
        showInLegend: true,
        yValueFormatString: "##.00mn",
        name: "Season 8",
        dataPoints: [
          { label: "day. 1", y: 11.76 },
          { label: "day. 2", y: 10.29 },
          { label: "day. 3", y: 12.02 },
          { label: "day. 4", y: 11.80 },
          { label: "day. 5", y: 12.48 },
          { label: "day. 6", y: 13.61 }
        ]
      }]
    });
    chart.render();
    
    function toggleDataSeries(e) {
      if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
        e.dataSeries.visible = false;
      } else {
        e.dataSeries.visible = true;
      }
      chart.render();
    }
    
    }
    ///
    