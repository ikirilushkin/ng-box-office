import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  bookSeat,
  cancelSeatBooking
} from '@bo/cinema-hall/actions/cinema-hall.actions';
import { CinemaHallView, Seat } from '@bo/cinema-hall/models';
import { Store } from '@ngrx/store';

@Component({
  selector: 'bo-seating-arrangement',
  templateUrl: './seating-arrangement.component.html',
  styleUrls: ['./seating-arrangement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeatingArrangementComponent {
  @Input() hall: CinemaHallView;
  constructor(private store: Store<{}>) {}

  onToggleSeat(seat: Seat) {
    if (seat.status === 'FREE') {
      this.store.dispatch(bookSeat({ seatId: seat.id }));
    } else {
      this.store.dispatch(cancelSeatBooking({ seatId: seat.id }));
    }
  }
}
