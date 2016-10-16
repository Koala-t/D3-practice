d3.select('#animation-div').selectAll('svg')
  .data([null])
  .enter()
  .append('svg')
  .style('width', '800px')
  .style('height', '600px')
  .style('background-color', 'blue');

var svg = d3.select("svg");

function makeCircle(names) {
  var circle = svg.selectAll("circle")
    .data(names);
  
  circle.enter().append("circle")
    .attr("cy", 100)
    .attr("cx", -30)
    .attr("r", 18)
    .attr("class", function(d){ return d });
};

function moveCircleRight() {
  svg.selectAll('circle')
    .transition()
    .delay( function(d, i){ return 150 * i } )
    .duration(1500)
    .attr('cx', function(d, i){ return 700 - (150 * i) });
};

function moveCircleDown() {
  svg.selectAll('circle')
    .transition()
    .delay( function(d, i){ return 50 * i })
    .duration(1000)
    .attr('cy', 400);
};

makeCircle(['flappy bird', 'frogger', 'potato', 'thumb', 'othergame']);
moveCircleRight()
setTimeout(moveCircleDown, 1500);
