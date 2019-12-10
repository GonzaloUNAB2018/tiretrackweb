import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Camion } from '../../modal/camion';
import { Observable } from 'rxjs';
import { AngularFireProvider } from '../../providers/angular-fire/angular-fire';

@IonicPage()
@Component({
  selector: 'page-camion',
  templateUrl: 'camion.html',
})
export class CamionPage {

  camion = {} as Camion;
  camion_ : Observable<any>;
  toEdit: boolean;
  empresa_id: any;
  neumaticos: any[];
  neum: any;
  id_tipoNeuma: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afProvider: AngularFireProvider,
    public loadingCtrl: LoadingController
    ) {
      this.camion.id_Veh = navParams.get('id_Veh');
      this.empresa_id = navParams.get('empresa_id');
      if(this.camion.id_Veh===undefined){
        this.camion.id_Veh = Date.now();
        this.toEdit = false;
      }else{
        this.camion.id_Veh = this.camion.id_Veh;
        this.camion_ = this.afProvider.getCamionDatos(this.empresa_id, this.camion.id_Veh).valueChanges();
        this.toEdit = true;
      }

      this.afProvider.getListaDeNeumaticos().valueChanges().subscribe(n=>{
        this.neumaticos = n
        console.log(this.neumaticos)
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CamionPage');
  }

  guardarCamion(){
    if(this.camion.yearVeh&&this.camion.marcaVeh&&this.camion.modeloVeh&&this.camion.patenteVeh){
      let load = this.loadingCtrl.create({
        content: 'Guardando Camión',
        duration: 2000
      });
      load.present().then(()=>{
        this.afProvider.newCamion(this.empresa_id, this.camion);
      });
  
      load.onDidDismiss(()=>{
        this.navCtrl.pop();
      })
    }else{
      alert('Faltan Datos')
    }
  }

  editarCamion(){
    if(this.id_tipoNeuma === undefined){
      this.cambiarDatosCamion();
    }else{
      let load_1 = this.loadingCtrl.create({
        content: 'Agregando neumáticos al Camión',
        duration: 2000
      });
      load_1.present().then(()=>{
        this.agregarTipoNeumatico();
      });
      load_1.onDidDismiss(()=>{
        this.cambiarDatosCamion();
      })
    };
  }

  cambiarDatosCamion(){
    let load = this.loadingCtrl.create({
      content: 'Editando Camión',
      duration: 2000
    });
    load.present().then(()=>{
      this.afProvider.editCamion(this.empresa_id, this.camion);
    });

    load.onDidDismiss(()=>{
      this.navCtrl.pop();
    })
  }

  agregarTipoNeumatico(){
    this.afProvider.getNeumaticoDatos(this.id_tipoNeuma).valueChanges().subscribe(neu=>{
      this.neum = neu;
      if(this.neum){
        this.camion.tipoNeuma.anchuNomNeu = this.neum.canchuNomNeu;
        this.camion.tipoNeuma.cargaNeu = this.neum.cargaNeu;
        this.camion.tipoNeuma.idConfNeu = this.neum.idConfNeu;
        this.camion.tipoNeuma.id_tipoNeuma = this.neum.id_tipoNeuma;
        this.camion.tipoNeuma.marcaNeu = this.neum.marcaNeu;
        this.camion.tipoNeuma.ratioNeu = this.neum.ratioNeu;
        this.camion.tipoNeuma.tipoNeu = this.neum.tipoNeu;
        this.camion.tipoNeuma.velocNeu = this.neum.velocNeu;
      };
    })
  }

  borrarCamion(){
    let load = this.loadingCtrl.create({
      content: 'Borrando Camión',
      duration: 2000
    });
    load.present().then(()=>{
      this.afProvider.deleteCamion(this.empresa_id, this.camion.id_Veh);
    });

    load.onDidDismiss(()=>{
      this.navCtrl.pop();
    })
  }

  setTipoNeumatico(id_tipoNeuma){
    this.id_tipoNeuma = id_tipoNeuma;
  }

}
