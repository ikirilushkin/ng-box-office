import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { cancelOrder, proceedOrder } from '../actions/cinema-hall.actions';
import { CinemaHallView, CinemaRow, Seat } from '../models';
import {
  getOrderedSeats,
  getSeatRows
} from '../selectors/cinema-hall.selectors';

@Component({
  selector: 'bo-cinema-hall',
  templateUrl: './cinema-hall.component.html',
  styleUrls: ['./cinema-hall.component.css']
})
export class CinemaHallComponent implements OnInit {
  hallView$: Observable<CinemaHallView>;

  orderedSeats$: Observable<Seat[]> = this.store.select(getOrderedSeats);

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.hallView$ = this.store.select(getSeatRows).pipe(
      map(data => {
        const rows: CinemaRow[] = [];
        for (const key of Object.keys(data)) {
          const cinemaRow: CinemaRow = {
            rowNumber: +key,
            seats: data[key]
          };
          rows.push(cinemaRow);
        }
        return { rows };
      })
    );
  }

  onOrderProceed(ids: number[]) {
    this.store.dispatch(proceedOrder({ ids }));
  }

  onCancelOrder(ids: number[]) {
    this.store.dispatch(cancelOrder({ ids }));
  }
}
