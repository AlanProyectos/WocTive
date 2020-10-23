import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {AlumnoComponent} from './alumno/alumno.component';
import {MaestroComponent} from './maestro/maestro.component';
import {SlidesComponent} from './slides/slides.component';
import {SlidesTeamsComponent} from './slides-teams/slides-teams.component';
import {IonicModule} from '@ionic/angular';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations:[
        MenuComponent,
        AlumnoComponent,
        MaestroComponent,
        SlidesComponent,
        SlidesTeamsComponent,
        HeaderComponent
    ],
    exports:[
        MenuComponent,
        AlumnoComponent,
        MaestroComponent,
        SlidesComponent,
        SlidesTeamsComponent,
        HeaderComponent

    ],
    imports: [
        CommonModule,
        IonicModule
    ]
})
export class ComponentsModule { }