import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    public loadingCtrl: LoadingController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if(this.email && this.password){
      let load = this.loadingCtrl.create({
        content: "Iniciando Sesión..."
      });
      load.present();
      this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(user => {
        if(user){
          this.navCtrl.setRoot(HomePage).then(()=>{
            load.dismiss();
          });
        }
      }).catch(e=>{
        alert(e);
        console.log(e);
      });
    }else{
      alert('Faltan datos!');
    }
  }

}
