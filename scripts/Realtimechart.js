<!doctype html> 
<script src="/vendor/d3.min.js"></script> 
<script src="/vendor/d3.layout.min.js"></script> 
<script src="/rickshaw.min.js"></script> 
 
<div id="chart"></div> 
 
<script> 
 
var graph = new Rickshaw.Graph({
    series: [ { data: [ { x: 0, y: 2 }, { x: 1, y: 4 } ...
    renderer: 'area',
    element: document.querySelector('#graph')
});
    }]
});
 
graph.render();
 
</script> 