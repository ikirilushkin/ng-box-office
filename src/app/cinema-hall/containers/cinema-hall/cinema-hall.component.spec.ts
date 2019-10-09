import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderActions } from '@bo/cinema-hall/actions';
import { CinemaHallComponent } from '@bo/cinema-hall/containers';
import { Seat } from '@bo/cinema-hall/models';
import * as fromCinemaHall from '@bo/cinema-hall/reducers';
import { getOrderedSeats } from '@bo/cinema-hall/selectors/cinema-hall.selectors';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';

describe('CinemaHallComponent', () => {
  let component: CinemaHallComponent;
  let fixture: ComponentFixture<CinemaHallComponent>;
  let store: MockStore<fromCinemaHall.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CinemaHallComponent,
        SeatingArrangementStubComponent,
        OrderStubComponent
      ],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: getOrderedSeats,
              value: []
            }
          ]
        })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaHallComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture).toMatchSnapshot();
  });

  it('should dispatch a proceedOrder action when onOrderProceed is called', () => {
    const ids = [1001, 1002];
    const action = OrderActions.proceedOrder({ ids });
    component.onOrderProceed(ids);
    expect(store.dispatch).toHaveBeenLastCalledWith(action);
  });

  it('should dispatch a cancelOrder action when onCancelOrder is called', () => {
    const ids = [1001, 1002];
    const action = OrderActions.cancelOrder({ ids });
    component.onCancelOrder(ids);
    expect(store.dispatch).toHaveBeenLastCalledWith(action);
  });
});

@Component({ selector: 'bo-seating-arrangement', template: '' })
class SeatingArrangementStubComponent {}

@Component({ selector: 'bo-order', template: '' })
class OrderStubComponent {
  @Input() orderedSeats: Observable<Seat[]>;
}
