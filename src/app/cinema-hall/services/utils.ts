import { Seat } from '@bo/cinema-hall/models';
import { random } from '@bo/utils';

export function buildCinemaHall(
  rowsCount: number,
  seatsCount: number,
  orderedCount: number
) {
  const seats: Seat[] = [];
  let id = 1;
  const orderedIds = getRandomSeatIds(orderedCount, id, rowsCount * seatsCount);
  for (let r = 1; r <= rowsCount; r++) {
    for (let i = 1; i <= seatsCount; i++) {
      seats.push({
        id,
        row: r,
        seatNumber: i,
        status: orderedIds.indexOf(id) !== -1 ? 'ORDERED' : 'FREE'
      });
      id++;
    }
  }
  return seats;
}

export function getRandomSeatIds(count = 10, minId = 1, maxId = 100) {
  const ids = [];
  while (count > 0) {
    const id = random(minId, maxId);
    if (ids.indexOf(id) === -1) {
      ids.push(id);
      count--;
    }
  }
  return ids;
}
