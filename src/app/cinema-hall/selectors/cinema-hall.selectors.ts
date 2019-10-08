import { CinemaRow } from '@bo/cinema-hall/models';
import * as fromCinemaHall from '@bo/cinema-hall/reducers';
import * as fromSeats from '@bo/cinema-hall/reducers/seat.reducer';
import { createSelector } from '@ngrx/store';

export const getSeatsState = createSelector(
  fromCinemaHall.selectCinemaHallState,
  state => state.seats
);

export const getSeats = createSelector(
  getSeatsState,
  fromSeats.selectAllSeats
);

export const seatsLoaded = createSelector(
  getSeats,
  seats => seats.length > 0
);

export const getSeatRows = createSelector(
  getSeats,
  seats =>
    seats.reduce((rows, seat) => {
      if (rows[seat.row] !== undefined) {
        rows[seat.row].push(seat);
      } else {
        rows[seat.row] = [seat];
      }
      return rows;
    }, {})
);

export const getCinemaHallView = createSelector(
  getSeatRows,
  rowsObj => {
    const rows: CinemaRow[] = [];
    for (const key of Object.keys(rowsObj)) {
      const cinemaRow: CinemaRow = {
        rowNumber: +key,
        seats: rowsObj[key]
      };
      rows.push(cinemaRow);
    }
    return { rows };
  }
);

export const getOrderedSeats = createSelector(
  getSeats,
  seats => seats.filter(seat => seat.status === 'BOOKED')
);
