import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  bookSeat,
  cancelSeatBooking
} from '@bo/cinema-hall/actions/seat.actions';
import { CinemaHallView, Seat } from '@bo/cinema-hall/models';
import { getCinemaHallView } from '@bo/cinema-hall/selectors/cinema-hall.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'bo-seating-arrangement',
  templateUrl: './seating-arrangement.component.html',
  styleUrls: ['./seating-arrangement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeatingArrangementComponent {
  hall$: Observable<CinemaHallView> = this.store.select(getCinemaHallView);

  constructor(private store: Store<{}>) {}

  onToggleSeat(seat: Seat) {
    if (seat.status === 'FREE') {
      this.store.dispatch(bookSeat({ seatId: seat.id }));
    } else {
      this.store.dispatch(cancelSeatBooking({ seatId: seat.id }));
    }
  }
}
