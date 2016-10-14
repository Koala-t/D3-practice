d3.select('#game-div').selectAll('svg')
  .data([null])
  .enter()
  .append('svg')
  .style('width', '800px')
  .style('height', '600px')
  .style('background-color', 'green');


var svg = d3.select("svg");

var circle = svg.selectAll("circle")
    .data([Math.random()* 300 + 100, Math.random()* 300 + 100, Math.random()* 300 + 100, Math.random()* 300 + 100]);

var circleEnter = circle.enter().append("circle");

circleEnter.attr("cy", 60);
circleEnter.attr("cx", function(d, i) { return i * 100 + 30; });
circleEnter.attr("r", function(d) { return Math.sqrt(d); });
circleEnter.attr("value", function(d) {return Math.floor(Math.random()*5) + 1});

svg.selectAll('circle')
  .transition().duration(3000)
  .attr('cy', "600");

// d3.select("svg")
//   .transition().duration(2000)
//     .style("background-color", "red")

