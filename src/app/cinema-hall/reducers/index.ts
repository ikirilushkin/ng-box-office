import * as fromRoot from '@bo/reducers';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromSeat from './seat.reducer';

export const cinemaHallFeatureState = 'cinemaHall';

export interface CinemaHallState {
  [fromSeat.seatsFeatureKey]: fromSeat.State;
}

export interface State extends fromRoot.State {
  cinemaHallFeatureState: CinemaHallState;
}

export const reducers: ActionReducerMap<CinemaHallState> = {
  seats: fromSeat.reducer
};

export const selectCinemaHallState = createFeatureSelector<CinemaHallState>(
  cinemaHallFeatureState
);
