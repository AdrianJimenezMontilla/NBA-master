import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantillaChicagoPageRoutingModule } from './plantilla-chicago-routing.module';

import { PlantillaChicagoPage } from './plantilla-chicago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantillaChicagoPageRoutingModule
  ],
  declarations: [PlantillaChicagoPage]
})
export class PlantillaChicagoPageModule {}
