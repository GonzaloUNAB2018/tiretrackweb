import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { NeumaticosPage } from '../neumaticos/neumaticos';
import { CamionesPage } from '../camiones/camiones';
import { AngularFireProvider } from '../../providers/angular-fire/angular-fire';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  empresas: any;

  empresa_id: any;

  constructor(
    public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private afProvider: AngularFireProvider,
    
   ) {

      this.afProvider.getListaDeEmpresas().valueChanges().subscribe(em=>{
        this.empresas = em;
        console.log(this.empresas)
      })

  }

  toNeumaticosPage(){
   
      this.navCtrl.push(NeumaticosPage);
    
    
  }

  toCamionesPage(){
    console.log(this.empresa_id);
    if(this.empresa_id === undefined){
      alert('Elija una empresa!')
    }else{
    this.navCtrl.push(CamionesPage, {empresa_id: this.empresa_id});
    }
  }

  letId(id){
    this.empresa_id = id;
  }

}
