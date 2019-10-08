import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CinemaHallRoutingModule } from '@bo/cinema-hall/cinema-hall-routing.module';
import { OrderComponent, SeatComponent } from '@bo/cinema-hall/components';
import {
  CinemaHallComponent,
  SeatingArrangementComponent
} from '@bo/cinema-hall/containers';
import { reducers } from '@bo/cinema-hall/reducers';
import { MaterialModule } from '@bo/material';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CinemaHallEffects } from './effects/cinema-hall.effects';

const COMPONENTS = [
  CinemaHallComponent,
  SeatComponent,
  SeatingArrangementComponent,
  OrderComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    CinemaHallRoutingModule,
    StoreModule.forFeature('cinemaHall', reducers),
    EffectsModule.forFeature([CinemaHallEffects]),
    MaterialModule
  ]
})
export class CinemaHallModule {}
