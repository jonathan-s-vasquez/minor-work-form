import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { formMinorWorkRoutingModule } from './form-minor-work-routing.module';
import { formMinorWorkComponent } from './form-minor-work.component';
import { FormGeneralComponent } from './form-general/form-general.component';
import { FormItComponent } from './form-it/form-it.component';
import { FormOtComponent } from './form-ot/form-ot.component';


@NgModule({
  declarations: [
    formMinorWorkComponent,
    FormGeneralComponent,
    FormItComponent,
    FormOtComponent
  ],
  imports: [
    CommonModule,
    formMinorWorkRoutingModule
  ]
})
export class formMinorWorkModule { }
