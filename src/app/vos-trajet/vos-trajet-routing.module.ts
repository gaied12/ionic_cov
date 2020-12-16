import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VosTrajetPage } from './vos-trajet.page';

const routes: Routes = [
  {
    path: '',
    component: VosTrajetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VosTrajetPageRoutingModule {}
