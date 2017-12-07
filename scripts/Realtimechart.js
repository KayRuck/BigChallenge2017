<html>
<head>
        <script>
            window.onload = function () {

            var chart = new CanvasJS.Chart("chartContainer", {
	        title: {
		    text: "Energieverbrauch je Quelle"
	        },
	        axisY: {
		    title: "Energieverbrauch in Wh",
		    suffix: "Wh"
	        },
	        data: [{
     		type: "column",	
	    	yValueFormatString: "#,### Wh",
		    indexLabel: "{y}",
    		dataPoints: [
			{ label: "boiler1", y: 95 },
			{ label: "boiler2", y: 63 },
			{ label: "boiler3", y: 54 },
			{ label: "boiler4", y: 76 },
			{ label: "boiler5", y: 84 },
			
	     	]
            }]
            });

           function updateChart() {
	       var boilerColor, deltaY, yVal;
	       var dps = chart.options.data[0].dataPoints;
	       for (var i = 0; i < dps.length; i++) {
           deltaY = Math.round(2 + Math.random() *(-2-2));
		   yVal = deltaY + dps[i].y > 0 ? dps[i].y + deltaY : 0;
		   boilerColor = yVal > 95 ? "#FF2500" : yVal >= 70 ? "#FF6000" : yVal < 70 ? "#6B8E23 " : null;
		   dps[i] = {label: "Quelle "+(i+1) , y: yVal, color: boilerColor};
	       }
	       chart.options.data[0].dataPoints = dps; 
	       chart.render();
           };
           updateChart();

           setInterval(function() {updateChart()}, 200);

           }
          </script>
          </head>
          <body>
          <div id="chartContainer" style="height: 300px; width: 300;"></div>
          <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>