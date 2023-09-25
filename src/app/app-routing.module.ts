import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'form-minor-work',
    title: 'NGI',
    loadChildren: () => import('./features/form-minor-work/form-minor-work.module').then((m) => m.formMinorWorkModule),
  },
  {
    path: '',
    redirectTo: '/form-minor-work',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
