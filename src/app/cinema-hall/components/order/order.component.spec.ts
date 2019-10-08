import {
  ChangeDetectionStrategy,
  DebugElement,
  NO_ERRORS_SCHEMA
} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OrderComponent } from '@bo/cinema-hall/components';
import { Seat } from '@bo/cinema-hall/models';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  let orderDe: DebugElement;
  let orderEl: HTMLElement;
  let orderBtnDe: DebugElement;
  let cancelBtnDe: DebugElement;
  let seats: Seat[];
  const emptyOrderSeats: Seat[] = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrderComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .overrideComponent(OrderComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    orderDe = fixture.debugElement;
    orderEl = orderDe.nativeElement;

    seats = [
      {
        id: 1000,
        row: 1,
        seatNumber: 1,
        status: 'BOOKED'
      },
      {
        id: 1001,
        row: 1,
        seatNumber: 2,
        status: 'BOOKED'
      }
    ];
    component.orderedSeats = seats;

    fixture.detectChanges();
  });

  it('should display order info', () => {
    expect(orderEl.textContent).toBeTruthy();
  });

  it('should be displyed when empty order', () => {
    component.orderedSeats = emptyOrderSeats;
    fixture.detectChanges();
    expect(orderEl.textContent).toBeFalsy();
  });

  it('should return list of ordered seats', () => {
    orderBtnDe = orderDe.query(By.css('.order-button'));
    let expectedIds: number[];
    component.proceedOrder.subscribe((ids: number[]) => (expectedIds = ids));
    orderBtnDe.triggerEventHandler('click', null);
    expect(expectedIds).toEqual([1000, 1001]);
  });

  it('should return list of canceled seats', () => {
    cancelBtnDe = orderDe.query(By.css('.cancel-button'));
    let expectedIds: number[];
    component.cancelOrder.subscribe((ids: number[]) => (expectedIds = ids));
    cancelBtnDe.triggerEventHandler('click', null);
    expect(expectedIds).toEqual([1000, 1001]);
  });
});
