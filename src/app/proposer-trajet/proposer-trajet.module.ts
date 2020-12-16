import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProposerTrajetPageRoutingModule } from './proposer-trajet-routing.module';

import { ProposerTrajetPage } from './proposer-trajet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProposerTrajetPageRoutingModule
  ],
  declarations: [ProposerTrajetPage]
})
export class ProposerTrajetPageModule {}
