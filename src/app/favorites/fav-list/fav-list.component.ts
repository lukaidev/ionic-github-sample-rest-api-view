import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GithubPublicRepo } from 'src/app/search/github-public-repo';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.scss'],
})
export class FavListComponent implements OnInit {

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
