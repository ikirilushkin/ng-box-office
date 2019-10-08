import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaHallComponent } from '@bo/cinema-hall/containers';

const routes: Routes = [{ path: '', component: CinemaHallComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CinemaHallRoutingModule {}
