import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubPublicRepo } from './github-public-repo';
import { SearchService } from './search.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  data$: Observable<GithubPublicRepo[]>
  search: string = "311249269";

  constructor(
    private searchService: SearchService,
    private router: Router,
    private loadingController: LoadingController) { }

  ngOnInit() {
    this.searchRepo(this.search);
  }

  searchRepo(value) {
    if (value !== "") {
      const repos$ = this.searchService.getPublicRepos(value);
      this.loadingController.create({
        cssClass: 'loading-backgroud',
        message: 'Loading repositories..'
      }).then(load => {
        load.present();
        repos$.subscribe(r => {
          this.data$ = repos$;
          load.dismiss();
        })
      });
    }

  }

  onSearch() {
    this.searchRepo(this.search);
  }

  isNumberKey(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
