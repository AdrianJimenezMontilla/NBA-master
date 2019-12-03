import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantillaChicagoPage } from './plantilla-chicago.page';

const routes: Routes = [
  {
    path: '',
    component: PlantillaChicagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantillaChicagoPageRoutingModule {}
