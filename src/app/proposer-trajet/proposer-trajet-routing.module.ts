import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProposerTrajetPage } from './proposer-trajet.page';

const routes: Routes = [
  {
    path: '',
    component: ProposerTrajetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProposerTrajetPageRoutingModule {}
