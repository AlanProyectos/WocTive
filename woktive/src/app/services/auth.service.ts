import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user.class';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable,of } from 'rxjs';
import { switchMap, map  } from 'rxjs/operators';
import { AlumnoService } from './alumno.service';
import { MaestroService } from './maestro.service';
import { UserInterface } from '../shared/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService 
{
  public isLogged: any =true;

  public user$ : Observable<User>
  private usersCollection: AngularFirestoreCollection<User>;
  private users : Observable<User[]>;

  alumno: UserInterface = {
    email :'',
    nombre:'',
    rol: '',
    uid :''
  }

  maestro: UserInterface = {
    email :'',
    nombre:'',
    rol: '',
    uid:''
  }


  constructor(public afAuth: AngularFireAuth,
              private db :AngularFirestore,
              private alumnoSvc:AlumnoService,
              private maestroSvc:MaestroService) 
  { 
    afAuth.authState.subscribe(user => (this.isLogged = user) );
    this.usersCollection = db.collection<User>('users');
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(
        actions => {
          return actions.map(a =>{
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return{ id, ...data};
            }
          );
        }
      )
    );

    this.user$ = this.afAuth.authState.pipe(
      switchMap((user)=>{
        if(user){
          return this.db.doc<User>(`Users/${user.uid}`).valueChanges();
        }
        else{
          return of(null);
        }
      })
    );

  }

  //Login
  async onLogin(user: User){
    try{
      this.isLogged = true;
      return await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
    }
    catch(error){
      console.log("Error ->", error);
    }
  }

  //Register
  async onRegister(email: string, password: string, rol:string, name:string){


    return new Promise ((resolve,reject) =>{

      this.afAuth.createUserWithEmailAndPassword(email, password).then( res =>{
        const uid = res.user.uid;

        this.db.collection('users').doc(uid).set({
          uid: uid,
          nombre: name,
          correo:email,
          rol:rol
        })
        
        resolve(res);
        this.sendVerifiedEmail();

        if(rol =="alumno"){
          this.alumno.email = email;
          this.alumno.nombre = name;
          this.alumno.rol = rol;
          this.alumno.uid = uid;
    
          this.alumnoSvc.addAlumno(this.alumno);
        }
        else if(rol=="maestro"){
          this.maestro.email = email;
          this.maestro.nombre = name;
          this.maestro.rol = rol;
          this.maestro.uid = uid;

          this.maestroSvc.addMaestro(this.maestro);
        }

        

      }).catch(err => reject(err));
    })
  }

  async sendVerifiedEmail(): Promise<void> {
    try {
      console.log("Hola He Mandado el Correo :D");
      return (await this.afAuth.currentUser).sendEmailVerification();
    }
    catch (error) {
      console.log('error  ->', error);
    }
  }

  isEmailVerified(email):boolean{
    return email === true ? true : false;
  }


}
