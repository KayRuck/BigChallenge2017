//mit Hilfe von d3 Workshopleiter

var data = [
{ k: 'PS-Anzeige', v: 30},
{ k: 'Bremsen', v: 40},
{ k: 'Lenkeinschlag', v: 50},
{ k: 'Gas', v: 89}
];

var svg_width = 500,
    svg_height = 300,
    svg = d3.select('.chart').append('svg').attr('width', svg_width).attr('height', svg_height),
    margin = {top: 20, right:20, bottom: 30, left:40, },
    width = svg_width - margin.left -margin.right,
    height = svg_height -margin.top -margin.bottom;

var g = svg.append('g').attr('transform', 'translate('+ margin.left + ',' + margin.top +')');

var x = d3.scaleBand().range([0, width]).padding(0.1);
var y = d3.scaleLinear().range([height, 0]);

y.domain ([0, d3.max(data, function(d) {return d.v;})]);
x.domain (data.map( function(d) { return d.k;}));

g.append('g').attr('class', 'axis axis-x')
  .attr('transform', 'translate(0, ' + height +')')
  .call(d3.axisBottom(x));

g.selectAll('.bar').data(data)
   .enter().append('rect')
   .attr('class', 'bar')
   .attr('x', function(d) { return x(d.k)})
   .attr('y', function(d) { return y(d.v)})
   .attr('width',x.bandwidth())
   .attr('height',function(d) { return height -y(d.v);});