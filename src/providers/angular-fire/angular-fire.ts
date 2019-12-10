import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class AngularFireProvider {

  constructor(
    public http: HttpClient,
    private afDb: AngularFireDatabase
    ) {
    console.log('Hello AngularFireProvider Provider');
  }

  getListaDeNeumaticos(){
    return this.afDb.list('Neumaticos');
  }

  getListaDeEmpresas(){
    return this.afDb.list('Empresas');
  }

  getFlota(empresa_id){
    return this.afDb.list('Empresas/'+empresa_id+'/flotaEmp/camiones');
  }

  getNeumaticoDatos(id){
    return this.afDb.object('Neumaticos/'+id);
  }

  newNeumatico(neumatico){
    this.afDb.database.ref('Neumaticos/'+neumatico.id_tipoNeuma).set(neumatico);
  }

  editNeumatico(neumatico){
    this.afDb.database.ref('Neumaticos/'+neumatico.id_tipoNeuma).update(neumatico);
  }

  deleteNeumatico(id){
    this.afDb.database.ref('Neumaticos/'+id).remove();
  }

  newCamion(empresa_id, camion){
    this.afDb.database.ref('Empresas/'+empresa_id+'/flotaEmp/camiones/'+camion.id_Veh).set(camion);
  }

  editCamion(empresa_id, camion){
    this.afDb.database.ref('Empresas/'+empresa_id+'/flotaEmp/camiones/'+camion.id_Veh).update(camion);
  }

  deleteCamion(empresa_id, id_Veh){
    this.afDb.database.ref('Empresas/'+empresa_id+'/flotaEmp/camiones/'+id_Veh).remove();
  }

  getCamionDatos(empresa_id, id_Veh){
    return this.afDb.object('Empresas/'+empresa_id+'/flotaEmp/camiones/'+id_Veh);
  }

}
