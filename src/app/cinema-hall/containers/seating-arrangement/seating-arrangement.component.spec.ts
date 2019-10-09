import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SeatActions } from '@bo/cinema-hall/actions';
import { SeatComponent } from '@bo/cinema-hall/components';
import { SeatingArrangementComponent } from '@bo/cinema-hall/containers';
import { Seat, SeatStatus } from '@bo/cinema-hall/models';
import { getCinemaHallView } from '@bo/cinema-hall/selectors/cinema-hall.selectors';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('SeatingArrangementComponent', () => {
  let component: SeatingArrangementComponent;
  let fixture: ComponentFixture<SeatingArrangementComponent>;
  let store: MockStore<{}>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SeatingArrangementComponent, SeatComponent],
      providers: [
        provideMockStore({
          selectors: [{ selector: getCinemaHallView, value: { rows: [] } }]
        })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatingArrangementComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture).toMatchSnapshot();
  });

  it('should dispatch a bookSeat event when free seat selected ', () => {
    const seat = generateSeat('FREE');
    const action = SeatActions.bookSeat({ seatId: seat.id });
    component.onToggleSeat(seat);
    expect(store.dispatch).toHaveBeenLastCalledWith(action);
  });

  it('should dispatch a cancelSeatBooking event when booked seat selected ', () => {
    const seat = generateSeat('BOOKED');
    const action = SeatActions.cancelSeatBooking({ seatId: seat.id });
    component.onToggleSeat(seat);
    expect(store.dispatch).toHaveBeenLastCalledWith(action);
  });
});

function generateSeat(status: SeatStatus): Seat {
  return {
    id: 1000,
    row: 1,
    seatNumber: 1,
    status
  };
}
