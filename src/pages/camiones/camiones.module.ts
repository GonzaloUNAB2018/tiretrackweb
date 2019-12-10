import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CamionesPage } from './camiones';

@NgModule({
  declarations: [
    CamionesPage,
  ],
  imports: [
    IonicPageModule.forChild(CamionesPage),
  ],
})
export class CamionesPageModule {}
