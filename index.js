import * as d3 from 'd3';

// root SVG element
d3.select(document.body)
  .append('svg')
  .attr('height', 600)
  .attr('width', 1000)

// dirty hacks to keep everything in one place
const css = `
div {
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
d3.select(document.body)
  .append('style')
  .text(css)

/* == EXAMPLE: delete me */

let data = [30, 86, 168, 281, 303, 365]
d3.select(document.body)
  .selectAll('div')
  .data(data)
  .enter()
  .append('div')
  .style('width', (d) => d + 'px')
  .text(d => d)
