import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string;
  n: number = 5;

  activarBuscador:boolean=false;

  tareas = [
    {
      Materia: 'Español',
      Fecha: '25/02/2020'
    },
    {
      Materia: 'Matematicas',
      Fecha: '24/02/2020'
    },
    {
      Materia: 'POO',
      Fecha: '23/02/2020'
    },
    {
      Materia: 'Artes',
      Fecha: '23/02/2020'
    }
  ]

  constructor(private menuCtrl: MenuController,public router: Router,public alertController: AlertController) { }

  ngOnInit() {}

  toggleMenu(){
    this.menuCtrl.toggle();
    console.log('oprimiste el menu');
  }

  showNotifications(){
    this.router.navigate(['notificaciones']);
  }

  main(){
    console.log(this.titulo);
    alert('hola');
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Dar de Alta',
      message: '¿Que quieres agregar <strong> Tarea</strong> o <strong>Proyecto</strong>?',
      buttons: [
        {
          text: 'Tarea',
          handler: () => {
            this.router.navigate(['add-tareas'])
          }
        },
        {
          text: 'Proyecto',
          handler: () => {
            this.router.navigate(['add-proyectos'])
          }
        }
      ]
    });

    await alert.present();
  }

  

}
