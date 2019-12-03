import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'plantilla',
    loadChildren: () => import('./pages/plantilla/plantilla.module').then( m => m.PlantillaPageModule)
  },
  {
    path: 'plantilla-chicago',
    loadChildren: () => import('./pages/plantilla-chicago/plantilla-chicago.module').then( m => m.PlantillaChicagoPageModule)
  },
  {
    path: 'second',
    loadChildren: () => import('./modals/second/second.module').then( m => m.SecondPageModule)
  },
  {
    path: 'guardar',
    loadChildren: () => import('./pages/guardar/guardar.module').then( m => m.GuardarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
