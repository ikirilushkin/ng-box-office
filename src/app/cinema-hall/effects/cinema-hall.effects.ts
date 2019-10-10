import { Injectable } from '@angular/core';
import { seatsLoaded } from '@bo/cinema-hall//selectors/cinema-hall.selectors';
import { SeatActions } from '@bo/cinema-hall/actions';
import { Seat } from '@bo/cinema-hall/models';
import { CinemaHallService } from '@bo/cinema-hall/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RouterNavigatedAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, withLatestFrom } from 'rxjs/operators';

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
      map(() => SeatActions.loadCinemaHallSeats())
    )
  );

  loadSeats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SeatActions.loadCinemaHallSeats),
      switchMap(() =>
        this.cinemaHallService
          .getSeats()
          .pipe(
            map((seats: Seat[]) =>
              SeatActions.loadCinemaHallSeatsSuccess({ seats })
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<{}>,
    private cinemaHallService: CinemaHallService
  ) {}
}
