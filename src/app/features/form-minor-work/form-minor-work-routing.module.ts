import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { formMinorWorkComponent } from './form-minor-work.component';

const routes: Routes = [{ path: '', component: formMinorWorkComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class formMinorWorkRoutingModule { }
