import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaHallComponent } from './containers/cinema-hall.component';

const routes: Routes = [{ path: '', component: CinemaHallComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CinemaHallRoutingModule {}
