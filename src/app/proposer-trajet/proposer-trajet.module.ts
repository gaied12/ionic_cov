import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProposerTrajetPageRoutingModule } from './proposer-trajet-routing.module';

import { ProposerTrajetPage } from './proposer-trajet.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    ProposerTrajetPageRoutingModule
  ],
  declarations: [ProposerTrajetPage]
})
export class ProposerTrajetPageModule {}
