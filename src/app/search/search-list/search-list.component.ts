import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubPublicRepo } from '../github-public-repo';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnInit {

  @Input()
  repos: GithubPublicRepo[] = [];

  constructor(private router: Router) { }

  ngOnInit() { }

  selectRepo(repo) {
    this.router.navigate(["repo"], {
      state: {
        repo
      }
    })
  }

}
