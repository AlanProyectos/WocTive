import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Users } from '../shared/users.class';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verified-email',
  templateUrl: './verified-email.page.html',
  styleUrls: ['./verified-email.page.scss'],
})
export class VerifiedEmailPage implements OnInit {

  public user$: Observable<Users> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService,private router: Router) { }

  ngOnInit() {
  }

  async onSendEmail() :Promise<void>{
    try {
      await this.authSvc.sendVerifiedEmail();
    }
    catch(error){
      console.log('Error -> ',error)
    }
    
  }

  pageLogin(){
    this.router.navigate(['/'])
  }

}
