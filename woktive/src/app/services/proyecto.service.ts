import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable,of } from 'rxjs';
import { switchMap, map  } from 'rxjs/operators';
import { ProyectosInterface } from '../shared/proyectos.interface';

@Injectable({providedIn: 'root'})
export class ProyectoService {
    private proyectoCollection : AngularFirestoreCollection<ProyectosInterface>;

    private proyecto : Observable<ProyectosInterface[]>;

    constructor(db: AngularFirestore)
    {
        this.proyectoCollection = db.collection<ProyectosInterface>('proyectos');
        this.proyecto = this.proyectoCollection.snapshotChanges().pipe(map( 
            actions =>{
                return actions.map( a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {id, ...data};
                }
                );
        }
        ));  
    }

    getProyectos(){
        return this.proyecto;
    }

    getProyecto(id:string){
        return this.proyectoCollection.doc<ProyectosInterface>(id).valueChanges();
    }

    addProyecto(proyecto: ProyectosInterface){
        return this.proyectoCollection.add(proyecto);
    }


}