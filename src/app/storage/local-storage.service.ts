import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GithubPublicRepo } from '../search/github-public-repo';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public FAVORITES: string = "FAVORITES";

  constructor(protected localStorage: LocalStorage) { }

  public setItem(item, payload) {
    this.localStorage.setItem(item, payload).subscribe(() => { });
  }

  public getItem(item) {
    return this.localStorage.getItem<any>(item);
  }

  public clear() {
    this.localStorage.clear().subscribe(() => { });
  }

  public getFavorites(): Observable<GithubPublicRepo[]> {
    return this.localStorage.getItem<GithubPublicRepo[]>(this.FAVORITES)
      .pipe(
        map(repos => {
          const _repos = <GithubPublicRepo[]>repos;
          return _repos;
        })
      )
  }

  public isFav(repoId): Observable<boolean>{
    return this.getFavorites()
    .pipe(
      map(repos => {
        let isExists = false;
        repos.forEach(repo => {
          if(repoId == repo.id){
            isExists = true;
          }
        })
        return isExists;
      })
    );
  }

  public addFavorite(repo: GithubPublicRepo) {
    this.getFavorites().subscribe(repos => {
      let _repos: GithubPublicRepo[];
      if (repos) {
        _repos = [...repos, repo];
      } else {
        _repos = [repo];
      }
      this.localStorage.setItem(this.FAVORITES, _repos).subscribe(() => {});
    })
  }

  public removeFavorite(repo: GithubPublicRepo) {
    this.getFavorites().subscribe(repos => {
      let _repos: GithubPublicRepo[];
      if (repos) {
        repos.map((i, index) => {
          if(repo.id == i.id){
            repos.splice(index, 1);
          }
        })
        _repos = [...repos]
        this.localStorage.setItem(this.FAVORITES, _repos).subscribe(() => {});
      }
      
    })
  }


}
