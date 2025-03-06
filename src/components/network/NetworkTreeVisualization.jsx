import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as d3 from 'd3';

const NetworkTreeVisualization = ({ data }) => {
  const svgRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (!data || !svgRef.current) return;

    const width = 960;
    const height = 600;
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };

    // Clear previous visualization
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const tree = d3.tree()
      .size([width - margin.left - margin.right, height - margin.top - margin.bottom]);

    const root = d3.hierarchy(data);
    const links = tree(root).links();
    const nodes = root.descendants();

    // Create links
    svg.selectAll(".link")
      .data(links)
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("d", d3.linkVertical()
        .x(d => d.x)
        .y(d => d.y))
      .style("fill", "none")
      .style("stroke", "#ccc")
      .style("stroke-width", "2px");

    // Create nodes
    const node = svg.selectAll(".node")
      .data(nodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.x},${d.y})`);

    // Node circles
    node.append("circle")
      .attr("r", 10)
      .style("fill", d => d.data.active ? "#4CAF50" : "#f44336")
      .style("stroke", "#fff")
      .style("stroke-width", "2px");

    // Node labels
    node.append("text")
      .attr("dy", "0.31em")
      .attr("x", d => d.children ? -12 : 12)
      .style("text-anchor", d => d.children ? "end" : "start")
      .text(d => d.data.name)
      .style("font-size", "12px")
      .style("font-family", "Arial");

    // Tooltip
    const tooltip = d3.select(tooltipRef.current);

    node.on("mouseover", (event, d) => {
      tooltip
        .style("opacity", 1)
        .html(`
          <div class="p-2">
            <strong>${d.data.name}</strong><br/>
            Level: ${d.depth}<br/>
            Members: ${d.data.members || 0}<br/>
            Volume: $${d.data.volume || 0}
          </div>
        `)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 10) + "px");
    })
    .on("mouseout", () => {
      tooltip.style("opacity", 0);
    });

  }, [data]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative bg-white p-4 rounded-lg shadow-sm overflow-x-auto"
    >
      <div className="min-w-full">
        <svg ref={svgRef} />
        <div
          ref={tooltipRef}
          className="absolute bg-white shadow-lg rounded-lg border border-gray-200 p-2 pointer-events-none opacity-0 transition-opacity z-50"
        />
      </div>
    </motion.div>
  );
};

export default NetworkTreeVisualization;