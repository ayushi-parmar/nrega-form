import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdRoutingModule } from './third-routing.module';
import { ThirdComponent } from './third.component';
import { ApplyComponent } from './apply/apply.component';


@NgModule({
  declarations: [ThirdComponent,
    ApplyComponent],
  imports: [
    CommonModule,
    ThirdRoutingModule
  ]
})
export class ThirdModule { }
