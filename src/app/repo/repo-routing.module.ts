import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepoPage } from './repo.page';

const routes: Routes = [
  {
    path: '',
    component: RepoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepoPageRoutingModule {}
