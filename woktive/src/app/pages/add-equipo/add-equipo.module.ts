import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEquipoPageRoutingModule } from './add-equipo-routing.module';

import { AddEquipoPage } from './add-equipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEquipoPageRoutingModule
  ],
  declarations: [AddEquipoPage]
})
export class AddEquipoPageModule {}
