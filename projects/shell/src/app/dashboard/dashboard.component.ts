import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';
import { RestDataService } from '../services/rest-data.service';
import { Chart, ChartKeys } from '../model/charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private svg: any;
  private margin = { top: 10, right: 100, bottom: 30, left: 30 };
  private width = 860 - this.margin.left - this.margin.right;
  private height = 500 - this.margin.top - this.margin.bottom;

  constructor(
    private _http: HttpClient,
    private _dataService: RestDataService
  ) {}

  private createSvg(): void {
    this.svg = d3
      .select('figure#charts')
      .append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);
  }
  private addDataToChart(data: Chart[]) {
    const allGroup: ChartKeys[] = ['valueA', 'valueB', 'valueC'];
    // Reformat the data: we need an array of arrays of {x, y} tuples
    const dataReady = allGroup.map(function (grpName: keyof Chart) {
      return {
        name: grpName,
        values: data.map(function (d) {
          console.log(d[grpName]);

          return { time: d.time, value: +d[grpName] };
        }),
      };
    });

    // A color scale: one color for each group
    const myColor = d3.scaleOrdinal().domain(allGroup).range(d3.schemeSet2);

    // Add X axis --> it is a date format
    const x = d3.scaleLinear().domain([0, 10]).range([0, this.width]);
    this.svg
      .append('g')
      .attr('transform', `translate(0, ${this.height})`)
      .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3.scaleLinear().domain([0, 20]).range([this.height, 0]);
    this.svg.append('g').call(d3.axisLeft(y));

    // Add the lines
    const line = d3
      .line()
      .x((d: any) => x(+d.time))
      .y((d: any) => y(+d.value));
    this.svg
      .selectAll('myLines')
      .data(dataReady)
      .join('path')
      .attr('class', (d: any) => d.name)
      .attr('d', (d: any) => line(d.values))
      .attr('stroke', (d: any) => myColor(d.name))
      .style('stroke-width', 4)
      .style('fill', 'none');

    // Add the points
    this.svg
      // First we need to enter in a group
      .selectAll('myDots')
      .data(dataReady)
      .join('g')
      .style('fill', (d: any) => myColor(d.name))
      .attr('class', (d: any) => d.name)
      // Second we need to enter in the 'values' part of this group
      .selectAll('myPoints')
      .data((d: any) => d.values)
      .join('circle')
      .attr('cx', (d: any) => x(d.time))
      .attr('cy', (d: any) => y(d.value))
      .attr('r', 5)
      .attr('stroke', 'white');

    // Add a label at the end of each line
    this.svg
      .selectAll('myLabels')
      .data(dataReady)
      .join('g')
      .append('text')
      .attr('class', (d: any) => d.name)
      .datum((d: any) => {
        return { name: d.name, value: d.values[d.values.length - 1] };
      }) // keep only the last value of each time series
      .attr(
        'transform',
        (d: any) => `translate(${x(d.value.time)},${y(d.value.value)})`
      ) // Put the text at the position of the last point
      .attr('x', 12) // shift the text a bit more right
      .text((d: any) => d.name)
      .style('fill', (d: any) => myColor(d.name))
      .style('font-size', 15);

    // Add a legend (interactive)
    this.svg
      .selectAll('myLegend')
      .data(dataReady)
      .join('g')
      .append('text')
      .attr('x', (d: any, i: any) => 30 + i * 60)
      .attr('y', 30)
      .text((d: any) => d.name)
      .style('fill', (d: any) => myColor(d.name))
      .style('font-size', 15)
      .on('click', function (event: any, d: any) {
        // is the element currently visible ?
        let currentOpacity: any = d3.selectAll('.' + d.name).style('opacity');
        // Change the opacity: from 0 to 1 or from 1 to 0
        d3.selectAll('.' + d.name)
          .transition()
          .style('opacity', currentOpacity == 1 ? 0 : 1);
      });
  }

  ngOnInit(): void {
    this.createSvg();
    this._dataService.getChartsData().subscribe((data: Chart[]) => {
      this.addDataToChart(data);
    });
  }
}
