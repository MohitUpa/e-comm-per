import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css'],
})
export class FilterBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public someRange2: number[] = [40, 350];
  someRange2config: any = {
    behaviour: 'drag',
    connect: true,
    margin: 1,
    tooltips: [true, true],
    start: [0, 600],
    step: 1,
    range: {
      min: 0,
      max: 600,
    },
  };
}
