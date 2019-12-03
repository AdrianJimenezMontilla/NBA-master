import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantillaPage } from './plantilla.page';

const routes: Routes = [
  {
    path: '',
    component: PlantillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantillaPageRoutingModule {}
