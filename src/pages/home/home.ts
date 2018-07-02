import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  irMascotas(){
    this.navCtrl.push('MascotasPage');
  }

  irLogin(){
    this.navCtrl.push('LoginPage');
  }
  
  irNosotros(){
    this.navCtrl.push('NosotrosPage');
  }

}
