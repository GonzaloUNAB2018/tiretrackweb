import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CamionPage } from './camion';

@NgModule({
  declarations: [
    CamionPage,
  ],
  imports: [
    IonicPageModule.forChild(CamionPage),
  ],
})
export class CamionPageModule {}
