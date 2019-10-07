import { Seat, SeatStatus } from '@bo/cinema-hall/models';
import { createEntityAdapter, EntityState, Update } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import {
  bookSeat,
  cancelOrder,
  cancelSeatBooking,
  loadCinemaHallSeatsSuccess,
  proceedOrder
} from '../actions/cinema-hall.actions';

export const seatsFeatureKey = 'seats';

export interface State extends EntityState<Seat> {}

export const adapter = createEntityAdapter<Seat>();

const initialState: State = adapter.getInitialState();

const cinemaHallReducer = createReducer(
  initialState,
  on(loadCinemaHallSeatsSuccess, (state, { seats }) =>
    adapter.addMany(seats, state)
  ),
  on(bookSeat, (state, { seatId }) =>
    adapter.updateOne(
      {
        id: seatId,
        changes: {
          status: 'BOOKED'
        }
      },
      state
    )
  ),
  on(cancelSeatBooking, (state, { seatId }) =>
    adapter.updateOne(
      {
        id: seatId,
        changes: {
          status: 'FREE'
        }
      },
      state
    )
  ),
  on(proceedOrder, (state, { ids }) => {
    return adapter.updateMany(updateStatusMany(ids, 'ORDERED'), state);
  }),
  on(cancelOrder, (state, { ids }) => {
    return adapter.updateMany(updateStatusMany(ids, 'FREE'), state);
  })
);

function updateStatusMany(ids: number[], status: SeatStatus) {
  const updates: Update<Seat>[] = [];
  for (const id of ids) {
    updates.push({
      id,
      changes: {
        status
      }
    });
  }
  return updates;
}

export function reducer(state: State | undefined, action: Action) {
  return cinemaHallReducer(state, action);
}

const { selectAll, selectEntities } = adapter.getSelectors();
export const selectAllSeats = selectAll;
export const selectSeatEntities = selectEntities;
