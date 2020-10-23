import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEquipoPage } from './add-equipo.page';

const routes: Routes = [
  {
    path: '',
    component: AddEquipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEquipoPageRoutingModule {}
