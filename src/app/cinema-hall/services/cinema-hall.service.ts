import { Injectable } from '@angular/core';
import { Seat } from '@bo/cinema-hall/models';
import { Observable, of } from 'rxjs';
import { buildCinemaHall } from './utils';

@Injectable({ providedIn: 'root' })
export class CinemaHallService {
  getSeats(): Observable<Seat[]> {
    return of(buildCinemaHall(10, 10, 10));
  }
}
