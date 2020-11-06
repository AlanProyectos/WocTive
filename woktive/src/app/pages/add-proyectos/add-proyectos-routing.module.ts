import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProyectosPage } from './add-proyectos.page';

const routes: Routes = [
  {
    path: '',
    component: AddProyectosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProyectosPageRoutingModule {}
