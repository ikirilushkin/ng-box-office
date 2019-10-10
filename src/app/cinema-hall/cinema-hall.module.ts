import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CinemaHallRoutingModule } from '@bo/cinema-hall/cinema-hall-routing.module';
import { OrderComponent, SeatComponent } from '@bo/cinema-hall/components';
import {
  CinemaHallComponent,
  SeatingArrangementComponent
} from '@bo/cinema-hall/containers';
import { CinemaHallEffects } from '@bo/cinema-hall/effects';
import * as fromCinemaHall from '@bo/cinema-hall/reducers';
import { reducers } from '@bo/cinema-hall/reducers';
import { MaterialModule } from '@bo/material';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

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
    StoreModule.forFeature(fromCinemaHall.cinemaHallFeatureState, reducers),
    EffectsModule.forFeature([CinemaHallEffects]),
    MaterialModule
  ]
})
export class CinemaHallModule {}
