import { PmComponent } from './pm/pm.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeaturesComponent } from './features.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { featuresState } from './features.route';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(featuresState)
  ],
  declarations: [
      FeaturesComponent,
      PmComponent
    ]
})
export class FeaturesModule { }
