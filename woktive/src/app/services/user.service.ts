import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../shared/user.interface';

@Injectable({
    providedIn:'root'
})
export class UserService {
    private userCollection : AngularFirestoreCollection<User>;
    private user: Observable<User[]>;



    constructor(db: AngularFirestore,){
        this.userCollection = db.collection<User>('users');
        this.user= this.userCollection.snapshotChanges().pipe(map(
            actions =>{
                return actions.map(a=>{
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {id,...data};
                }
                );
            }
        ));

    }
    getUsers(){
        console.log(this.user);
        console.log('HOA')
        return this.user;
    }
    getUser(id:string){
        return this.userCollection.doc<User>(id).valueChanges();
    }
}