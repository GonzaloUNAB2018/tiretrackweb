import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireProvider } from '../../providers/angular-fire/angular-fire';
import { NeumaticoPage } from '../neumatico/neumatico';

/**
 * Generated class for the NeumaticosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-neumaticos',
  templateUrl: 'neumaticos.html',
})
export class NeumaticosPage {

  neumaticos: any[]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afProvider: AngularFireProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NeumaticosPage');
    this.leerNeumaticos();
  }

  leerNeumaticos(){
    this.afProvider.getListaDeNeumaticos().valueChanges().subscribe(n=>{
      this.neumaticos = n
      console.log(this.neumaticos)
    })
  }

  toNeumatico(id){
    console.log(id)
    this.navCtrl.push(NeumaticoPage, {id: id});
    
  }

}
