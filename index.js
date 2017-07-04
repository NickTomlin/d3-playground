import * as d3 from 'd3';

// errmmm dirty hacks to avoid an extra index.html
let css = `
.chart div {
  font: 10px sans-serif;
  background-color: steelblue;
  text-align: right;
  padding: 3px;
  margin: 1px;
  color: white;
}

path {
  fill: none;
  stroke: #aaa;
}
`
let style = document.createElement('style')
style.textContent = css
document.body.appendChild(style)

let data = [30, 86, 168, 281, 303, 365]

let chart = document.createElement('div')
document.body.appendChild(chart)
chart.classList.add('chart')

d3.select(chart)
  .selectAll('div')
  .data(data)
  .enter()
  .append('div')
  .style('width', (d) => d + 'px')
  .text(d => d)

var lineData = [[0, 50], [100, 80], [200, 40], [300, 60], [400, 30]];

let lineGenerator = d3.line().curve(d3.curveNatural)
let pathString = lineGenerator(lineData)

d3.select('path')
  .attr('d', pathString)

var someData= ["filler", "filler", "filler", "filler"];
d3.select("body").selectAll("#borderdiv")
  .data(someData)
  .enter()
  .append("div")
  .html("Wow")

  .append("span")
  .html("Even yow Wow")
  .style("font-weight", "900");
