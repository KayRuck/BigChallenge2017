(function(){

    var chart = d3.select('.chart');

    d3.tsv('data/barchart.tsv', function(data){

        // coerce to number
        data.forEach(function(d){
            d.value = +d.value;
        });

        var maxVal = d3.max(data, function(d){
            return d.value;
        });

        data.sort(function(a,b){
            return Number(b.value) - Number(a.value);
        })


        var bar = chart.selectAll('div')
        .data(data)
        .enter().append('div')
        .attr('class', 'bar')
        .style('width', function(d){
            return Number((d.value/maxVal) * 100) + '%';
        });

        bar.append('span')
        .attr('class', 'label')
        .text(function(d){
            return d.value;
        });

        bar.append('span')
        .attr('class', 'name')
        .text(function(d){
            return d.name;
        });

    });

})();