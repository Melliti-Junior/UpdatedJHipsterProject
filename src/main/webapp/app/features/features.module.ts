import { HttpModule } from '@angular/http';
import { PmComponent } from './pm/pm.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeaturesComponent } from './features.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { featuresState } from './features.route';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule, RatingModule, CalendarModule, ButtonModule } from 'primeng/primeng';
import { CardModule } from 'primeng/card';
import { PanelModule} from 'primeng/panel';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      HttpModule,
      BrowserModule,
      BrowserAnimationsModule,
      RouterModule.forChild(featuresState),
      AccordionModule,
      RatingModule,
      CalendarModule,
      ButtonModule,
      CardModule,
      PanelModule,
  ],
  declarations: [
      FeaturesComponent,
      PmComponent
    ]
})
export class FeaturesModule { }
