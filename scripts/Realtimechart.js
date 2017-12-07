<!doctype html> 
<script src="/vendor/d3.min.js"></script> 
<script src="/vendor/d3.layout.min.js"></script> 
<script src="/rickshaw.min.js"></script> 
 
<div id="chart"></div> 
 
<script> 
 

var data = [ { x: 1 , y: 185 }, { x: 2 , y: 186 }, { x: 3 , y: 189 }, { x: 4 , y: 200 }, { x: 5 , y: 189 }, { x: 6 , y: 200 } ];

var graph = new Rickshaw.Graph( {
        element: document.querySelector("#chart"),
        width: 580,
        height: 250,
        series: [ {
                color: 'steelblue',
                data: data
        } ]
} );

graph.render();

</script>
