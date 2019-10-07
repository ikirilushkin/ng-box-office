import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cinema-hall',
    pathMatch: 'full'
  },
  {
    path: 'cinema-hall',
    loadChildren: () =>
      import('./cinema-hall/cinema-hall.module').then(m => m.CinemaHallModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
