import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Seat } from '@bo/cinema-hall/models';

@Component({
  selector: 'bo-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeatComponent {
  @Input() seat: Seat;

  @Output() toggleSeat: EventEmitter<Seat> = new EventEmitter();

  toggle() {
    if (this.seat.status !== 'ORDERED') {
      this.toggleSeat.emit(this.seat);
    }
  }
}
