import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepoPageRoutingModule } from './repo-routing.module';

import { RepoPage } from './repo.page';
import { OwnerComponent } from './owner/owner.component';
import { CommitersComponent } from './commiters/commiters.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepoPageRoutingModule
  ],
  declarations: [
    RepoPage,
    OwnerComponent,
    CommitersComponent,
    TimelineComponent
  ]
})
export class RepoPageModule {}
