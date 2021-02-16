import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepoPageRoutingModule } from './repo-routing.module';

import { RepoPage } from './repo.page';
import { OwnerComponent } from './owner/owner.component';
import { CommitersComponent } from './commiters/commiters.component';

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
    CommitersComponent
  ]
})
export class RepoPageModule {}
