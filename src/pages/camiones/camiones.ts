import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CamionPage } from '../camion/camion';
import { AngularFireProvider } from '../../providers/angular-fire/angular-fire';

/**
 * Generated class for the CamionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camiones',
  templateUrl: 'camiones.html',
})
export class CamionesPage {

  trucks : any[];
  empresa_id : any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afProvider: AngularFireProvider
    ) {
  }

  ionViewDidLoad() {
    this.empresa_id = this.navParams.get('empresa_id');
    console.log('ionViewDidLoad CamionesPage');
    this.afProvider.getFlota(this.empresa_id).valueChanges().subscribe(n=>{
      this.trucks = n
      console.log(this.trucks);
    })
  }

  toCamion(id_Veh){
    this.navCtrl.push(CamionPage, {id_Veh:id_Veh, empresa_id: this.empresa_id})
  }

}
