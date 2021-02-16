import { Component, Input, OnInit } from '@angular/core';
import { RepoCommit } from '../repo-commit';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {

  @Input()
  commits: RepoCommit[];

  constructor() { }

  ngOnInit() {}

}
