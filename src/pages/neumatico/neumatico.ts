import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Tipo_Neumatico } from '../../modal/tipo_neumatico';
import { AngularFireProvider } from '../../providers/angular-fire/angular-fire';
import { Observable } from 'rxjs';

/**
 * Generated class for the NeumaticoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-neumatico',
  templateUrl: 'neumatico.html',
})
export class NeumaticoPage {

  tipo_neumatico = {} as Tipo_Neumatico;
  neumatico : Observable<any>;
  toEdit: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afProvider: AngularFireProvider,
    public loadingCtrl: LoadingController
    ) {
      this.tipo_neumatico.id_tipoNeuma = navParams.get('id');
      if(this.tipo_neumatico.id_tipoNeuma===undefined){
        this.tipo_neumatico.id_tipoNeuma = Date.now();
        this.toEdit = false;
      }else{
        this.tipo_neumatico.id_tipoNeuma = this.tipo_neumatico.id_tipoNeuma;
        this.neumatico = this.afProvider.getNeumaticoDatos(this.tipo_neumatico.id_tipoNeuma).valueChanges();
        this.toEdit = true;
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NeumaticoPage');
  }

  guardarNeumatico(){
    if(this.tipo_neumatico.anchuNomNeu&&this.tipo_neumatico.cargaNeu&&this.tipo_neumatico.idConfNeu&&this.tipo_neumatico.marcaNeu&&this.tipo_neumatico.ratioNeu&&this.tipo_neumatico.velocNeu){
      this.tipo_neumatico.id_tipoNeuma = Date.now();
      let load = this.loadingCtrl.create({
        content: 'Guardando Neumático',
        duration: 2000
      });
      load.present().then(()=>{
        this.afProvider.newNeumatico(this.tipo_neumatico);
      });

      load.onDidDismiss(()=>{
        this.navCtrl.pop();
      })
    }else{
      alert('Faltan Datos')
    }
    
  }

  editarNeumatico(){
    let load = this.loadingCtrl.create({
      content: 'Editando Neumático',
      duration: 2000
    });
    load.present().then(()=>{
      this.afProvider.newNeumatico(this.tipo_neumatico);
    });

    load.onDidDismiss(()=>{
      this.navCtrl.pop();
    })
    
  }

  borrarNeumatico(){
    let load = this.loadingCtrl.create({
      content: 'Borrando Neumático',
      duration: 2000
    });
    load.present().then(()=>{
      this.afProvider.deleteNeumatico(this.tipo_neumatico.id_tipoNeuma);
    });

    load.onDidDismiss(()=>{
      this.navCtrl.pop();
    })
  }

}
