import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProyectosPageRoutingModule } from './add-proyectos-routing.module';

import { AddProyectosPage } from './add-proyectos.page';

import {IonicSelectableModule} from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProyectosPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [AddProyectosPage]
})
export class AddProyectosPageModule {}
