import { Seat } from '@bo/cinema-hall/models';
import { createAction, props } from '@ngrx/store';

export const loadCinemaHallSeats = createAction('[Cinema Hall] Load Seats');

export const loadCinemaHallSeatsSuccess = createAction(
  '[Cinema Hall] Load Seats Success',
  props<{ seats: Seat[] }>()
);

export const bookSeat = createAction(
  '[Cinema Hall] Book Seat',
  props<{ seatId: number }>()
);

export const cancelSeatBooking = createAction(
  '[Cinema Hall] Cancel Seat Booking',
  props<{ seatId: number }>()
);

export const proceedOrder = createAction(
  '[Cinema Hall] Proceed Order',
  props<{ ids: number[] }>()
);

export const cancelOrder = createAction(
  '[Cinema Hall] Cancel Order',
  props<{ ids: number[] }>()
);
