export type SeatStatus = 'ORDERED' | 'BOOKED' | 'FREE';

export interface Seat {
  id: number;
  row: number;
  seatNumber: number;
  status: SeatStatus;
}

export interface CinemaRow {
  rowNumber: number;
  seats: Seat[];
}

export interface CinemaHall {
  seats: Seat[];
}

export interface CinemaHallView {
  rows: CinemaRow[];
}
