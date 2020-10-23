import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {
        path:'equipo',
        loadChildren: () => import('../equipo/equipo.module').then(m=>m.EquipoPageModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'calendario',
        loadChildren: () => import('../calendario/calendario.module').then( m => m.CalendarioPageModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'proyectos',
        loadChildren: () => import('../proyectos/proyectos.module').then( m => m.ProyectosPageModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule),
        canActivate:[AuthGuard]
      }
    ]
  },
  {
    path:'',
    redirectTo:'/tabs/home',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
