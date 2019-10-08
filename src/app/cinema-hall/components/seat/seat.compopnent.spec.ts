import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SeatComponent } from '@bo/cinema-hall/components';
import { Seat } from '@bo/cinema-hall/models';

describe('SeatComponent', () => {
  let component: SeatComponent;
  let fixture: ComponentFixture<SeatComponent>;
  let expectedSeat: Seat;
  let orderedSeat: Seat;
  let seatDe: DebugElement;
  let seatEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SeatComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatComponent);
    component = fixture.componentInstance;

    seatDe = fixture.debugElement.query(By.css('.seat'));
    seatEl = seatDe.nativeElement;

    expectedSeat = {
      id: 1000,
      row: 1,
      seatNumber: 1,
      status: 'FREE'
    };
    orderedSeat = {
      id: 1000,
      row: 1,
      seatNumber: 2,
      status: 'ORDERED'
    };
    component.seat = expectedSeat;

    fixture.detectChanges();
  });

  it('should display seat number', () => {
    expect(seatEl.textContent).toContain(`${expectedSeat.seatNumber}`);
  });

  it('should trigger toggleSeat event', () => {
    let selectedSeat: Seat;
    component.toggleSeat.subscribe((seat: Seat) => (selectedSeat = seat));
    seatDe.triggerEventHandler('click', null);
    expect(selectedSeat).toBe(expectedSeat);
  });

  it('should not trigger toggleSeat event for seat with status ORDERED', () => {
    component.seat = orderedSeat;
    fixture.detectChanges();
    spyOn(component, 'toggle');
    let selectedSeat: Seat;
    component.toggleSeat.subscribe((seat: Seat) => (selectedSeat = seat));
    seatDe.triggerEventHandler('click', null);
    expect(component.toggle).toHaveBeenCalled();
    expect(selectedSeat).toBe(undefined);
  });
});

describe('SeatComponent passing output', () => {
  let testHost: TestSeatHostComponent;
  let fixture: ComponentFixture<TestSeatHostComponent>;
  let seatDe: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SeatComponent, TestSeatHostComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSeatHostComponent);
    testHost = fixture.componentInstance;
    seatDe = fixture.debugElement.queryAll(By.css('.seat'))[1];

    fixture.detectChanges();
  });

  it('should raise toggleSeatEvent', () => {
    seatDe.triggerEventHandler('click', null);
    expect(testHost.selectedSeat).toEqual(testHost.seat2);
  });
});

@Component({
  template: `
    <bo-seat [seat]="seat1" (toggleSeat)="onSelected($event)"></bo-seat>
    <bo-seat [seat]="seat2" (toggleSeat)="onSelected($event)"></bo-seat>
  `
})
class TestSeatHostComponent {
  seat1: Seat = { id: 1000, row: 1, seatNumber: 1, status: 'FREE' };
  seat2: Seat = { id: 1001, row: 1, seatNumber: 2, status: 'FREE' };
  selectedSeat: Seat;
  onSelected(seat: Seat) {
    this.selectedSeat = seat;
  }
}
