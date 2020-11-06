import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../shared/user.interface';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable,of } from 'rxjs';
import { switchMap, map  } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AlumnoService {
    private alumnoCollection : AngularFirestoreCollection<UserInterface>;

    private alumno : Observable<UserInterface[]>;

    constructor(db: AngularFirestore)
    {
        this.alumnoCollection = db.collection<UserInterface>('alumno');
        this.alumno = this.alumnoCollection.snapshotChanges().pipe(map( 
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

    getAlumnos(){
        return this.alumno;
    }

    getAlumno(id:string){
        return this.alumnoCollection.doc<UserInterface>(id).valueChanges();
    }

    addAlumno(alumno: UserInterface){
        console.log('alumno -> ',alumno)
        return this.alumnoCollection.add(alumno);
    }


}