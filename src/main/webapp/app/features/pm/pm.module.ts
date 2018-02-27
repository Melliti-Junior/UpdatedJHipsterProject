import { PmRoute } from './pm.route';
import { FeaturesModule } from './../features.module';
import { NgModule } from '@angular/core';
import { PmComponent } from './pm.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    FeaturesModule,
    RouterModule.forChild([ PmRoute ])
  ],
  declarations: [PmComponent]
})
export class PmModule { }
