import { Component, Input, OnInit } from '@angular/core';
import { CommiterInfo } from '../commiters-info';

@Component({
  selector: 'app-commiters',
  templateUrl: './commiters.component.html',
  styleUrls: ['./commiters.component.scss'],
})
export class CommitersComponent implements OnInit {

  @Input()
  commiters: CommiterInfo[];

  @Input()
  size: number;

  constructor() { }

  ngOnInit() { }

  getPercent(count: number) {
    return count / this.size;
  }

}
