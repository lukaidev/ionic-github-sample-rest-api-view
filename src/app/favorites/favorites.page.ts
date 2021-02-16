import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubPublicRepo } from '../search/github-public-repo';
import { LocalStorageService } from '../storage/local-storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  data$: Observable<GithubPublicRepo[]>;
  size: number = 0;

  constructor(
    private storage: LocalStorageService) { }

  ngOnInit() {
    this.searchRepo();
  }

  searchRepo() {
    setTimeout(() => {
      const repos$ = this.storage.getFavorites();
      repos$.subscribe(r => {
        if (this.size !== r.length) {
          this.data$ = repos$;
          this.size = r.length;
        }
      });
      this.searchRepo();
    }, 2500);
  }

}
