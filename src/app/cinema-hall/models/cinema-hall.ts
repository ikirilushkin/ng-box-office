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

export interface CinemaHallView {
  rows: CinemaRow[];
}

export function generateMockSeat(status: SeatStatus, id = 1000): Seat {
  return {
    id,
    row: 1,
    seatNumber: 1,
    status
  };
}
