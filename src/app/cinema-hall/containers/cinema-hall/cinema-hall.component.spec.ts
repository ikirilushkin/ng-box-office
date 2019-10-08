import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CinemaHallComponent } from '@bo/cinema-hall/containers';
import { provideMockStore } from '@ngrx/store/testing';

describe('CinemaHallComponent', () => {
  let component: CinemaHallComponent;
  let fixture: ComponentFixture<CinemaHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CinemaHallComponent, SeatingArrangementStubComponent],
      providers: [
        provideMockStore({
          initialState: {}
        })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({ selector: 'bo-seating-arrangement', template: '' })
class SeatingArrangementStubComponent {}
