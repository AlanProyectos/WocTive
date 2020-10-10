import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {AlumnoComponent} from './alumno/alumno.component';
import {MaestroComponent} from './maestro/maestro.component'
import {IonicModule} from '@ionic/angular';

@NgModule({
    declarations:[
        MenuComponent,
        AlumnoComponent,
        MaestroComponent
    ],
    exports:[
        MenuComponent,
        AlumnoComponent,
        MaestroComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ]
})
export class ComponentsModule { }