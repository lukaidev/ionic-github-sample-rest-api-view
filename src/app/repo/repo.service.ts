import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RepoAnalytics } from './repo-analytics';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  constructor(private http: HttpClient) { }

  getRepoAnalytics(owner: string, repo: string): Observable<RepoAnalytics> {
    return this.http.get<RepoAnalytics>(`${environment.url}/github/repos/${owner}/${repo}/analytics`)
    .pipe(
      shareReplay()
    );
  }


}
