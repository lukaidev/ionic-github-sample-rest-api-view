import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubPublicRepo } from './github-public-repo';
import {catchError, map, shareReplay, tap} from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getPublicRepos(since: number): Observable<GithubPublicRepo[]> {
    return this.http.get<GithubPublicRepo[]>(`${environment.url}/github/repositories?since=${since}`)
    .pipe(
      shareReplay()
    );
  }

}
