import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RouterNavigatedAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import {
  loadCinemaHallSeats,
  loadCinemaHallSeatsSuccess
} from '../actions/seat.actions';
import { Seat } from '../models';
import { seatsLoaded } from '../selectors/cinema-hall.selectors';
import { CinemaHallService } from '../services';

@Injectable()
export class CinemaHallEffects {
  initSeatLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      withLatestFrom(this.store.select(seatsLoaded)),
      filter(([action, seats]) => {
        return (
          (action as RouterNavigatedAction).payload.routerState.url.includes(
            '/cinema-hall'
          ) && !seats
        );
      }),
      map(() => loadCinemaHallSeats())
    )
  );

  loadSeats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCinemaHallSeats),
      switchMap(() =>
        this.cinemaHallService
          .getSeats()
          .pipe(map((seats: Seat[]) => loadCinemaHallSeatsSuccess({ seats })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<{}>,
    private cinemaHallService: CinemaHallService
  ) {}
}
