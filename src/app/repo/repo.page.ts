import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { GithubPublicRepo } from '../search/github-public-repo';
import { RepoAnalytics } from './repo-analytics';
import { RepoService } from './repo.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.page.html',
  styleUrls: ['./repo.page.scss'],
})
export class RepoPage implements OnInit {

  repoAnalytics$: Observable<RepoAnalytics>;

  repo: GithubPublicRepo;

  constructor(
    private repoService: RepoService,
    private router: Router,
    private loadingController: LoadingController) {
  }

  ngOnInit() {
    this.getRouteData();
  }

  async getRouteData() {
    const payload = await this.router.getCurrentNavigation().extras.state as any;
    if (payload) {
      this.repo = payload.repo;
      this.loadRepo(this.repo.owner, this.repo.name);
    } else {
      this.router.navigate(['tabs', 'favorites']);
    }
  }

  loadRepo(owner: string, repo: string) {
    const data$ = this.repoService.getRepoAnalytics(owner, repo);
    this.loadingController.create({
      cssClass: 'loading-backgroud',
      message: 'Loading repository'
    }).then(load => {
      load.present();
      data$.subscribe(r => {
        this.repoAnalytics$ = data$;
        load.dismiss();
      })
    });

  }
}
