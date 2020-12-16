import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VosTrajetPageRoutingModule } from './vos-trajet-routing.module';

import { VosTrajetPage } from './vos-trajet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VosTrajetPageRoutingModule
  ],
  declarations: [VosTrajetPage]
})
export class VosTrajetPageModule {}
