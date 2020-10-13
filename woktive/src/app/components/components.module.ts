import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {AlumnoComponent} from './alumno/alumno.component';
import {MaestroComponent} from './maestro/maestro.component';
import {SlidesComponent} from './slides/slides.component';
import {SlidesTeamsComponent} from './slides-teams/slides-teams.component';
import {TabsComponent} from './tabs/tabs.component'
import {IonicModule} from '@ionic/angular';

@NgModule({
    declarations:[
        MenuComponent,
        AlumnoComponent,
        MaestroComponent,
        SlidesComponent,
        SlidesTeamsComponent,
        TabsComponent
    ],
    exports:[
        MenuComponent,
        AlumnoComponent,
        MaestroComponent,
        SlidesComponent,
        SlidesTeamsComponent,
        TabsComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ]
})
export class ComponentsModule { }