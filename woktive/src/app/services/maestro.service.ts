import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../shared/user.interface';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable,of } from 'rxjs';
import { switchMap, map  } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class MaestroService {
    private maestroCollection : AngularFirestoreCollection<UserInterface>;

    private maestro : Observable<UserInterface[]>;

    constructor(db: AngularFirestore)
    {
        this.maestroCollection = db.collection<UserInterface>('maestro');
        this.maestro = this.maestroCollection.snapshotChanges().pipe(map( 
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

    getMaestros(){
        console.log(this.maestro);
        return this.maestro;
    }

    getMaestro(id:string){
        return this.maestroCollection.doc<UserInterface>(id).valueChanges();
    }

    addMaestro(maestro: UserInterface){
        return this.maestroCollection.add(maestro);
    }


}