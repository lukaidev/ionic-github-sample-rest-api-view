import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubPublicRepo } from 'src/app/search/github-public-repo';
import { LocalStorageService } from 'src/app/storage/local-storage.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss'],
})
export class OwnerComponent implements OnInit {

  @Input()
  repo: GithubPublicRepo;

  isFav: Promise<Boolean>;

  constructor(private storage: LocalStorageService) { }

  ngOnInit() {
    this.checkFav()
  }

  checkFav(){
    this.isFav = Promise.resolve(false);
    this.storage.isFav(this.repo.id).subscribe(isExists => {
      this.isFav = Promise.resolve(isExists);
    });
  }

  addFav(){
    this.storage.addFavorite(this.repo);
    this.isFav = Promise.resolve(true);
  }

  removeFave(){
    this.storage.removeFavorite(this.repo);
    this.isFav = Promise.resolve(false);
  }

}
