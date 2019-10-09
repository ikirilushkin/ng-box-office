import { Component } from '@angular/core';
import { OrderActions } from '@bo/cinema-hall/actions';
import { Seat } from '@bo/cinema-hall/models';
import { getOrderedSeats } from '@bo/cinema-hall/selectors/cinema-hall.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'bo-cinema-hall',
  templateUrl: './cinema-hall.component.html',
  styleUrls: ['./cinema-hall.component.scss']
})
export class CinemaHallComponent {
  orderedSeats$: Observable<Seat[]> = this.store.select(getOrderedSeats);

  constructor(private store: Store<{}>) {}

  onOrderProceed(ids: number[]) {
    this.store.dispatch(OrderActions.proceedOrder({ ids }));
  }

  onCancelOrder(ids: number[]) {
    this.store.dispatch(OrderActions.cancelOrder({ ids }));
  }
}
