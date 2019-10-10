import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Seat } from '@bo/cinema-hall/models';

@Component({
  selector: 'bo-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderComponent {
  @Input() orderedSeats: Seat[];

  @Input() totalSum: number;

  @Output() proceedOrder: EventEmitter<number[]> = new EventEmitter();

  @Output() cancelOrder: EventEmitter<number[]> = new EventEmitter();

  cancel() {
    this.cancelOrder.emit(this.getOrderedSeatsIds());
  }

  buy() {
    this.proceedOrder.emit(this.getOrderedSeatsIds());
  }

  private getOrderedSeatsIds(): number[] {
    return this.orderedSeats.map(seat => seat.id);
  }
}
