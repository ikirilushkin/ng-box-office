import * as fromRoot from '@bo/reducers';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromCinemaHall from './seat.reducer';

export interface CinemaHallState {
  [fromCinemaHall.seatsFeatureKey]: fromCinemaHall.State;
}

export interface State extends fromRoot.State {
  cinemaHall: CinemaHallState;
}

export const reducers: ActionReducerMap<CinemaHallState> = {
  seats: fromCinemaHall.reducer
};

export const selectCinemaHallState = createFeatureSelector<CinemaHallState>(
  'cinemaHall'
);
