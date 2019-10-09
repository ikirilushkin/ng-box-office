import * as fromSeat from '@bo/cinema-hall/reducers/seat.reducer';
import { reducer } from '@bo/cinema-hall/reducers/seat.reducer';
import { OrderActions, SeatActions } from '../actions';
import { generateMockSeat } from '../models';

describe('SeatReducer', () => {
  describe('undefined action', () => {
    it('should return default state', () => {
      const result = reducer(undefined, {} as any);
      expect(result).toMatchSnapshot();
    });
  });

  describe('seat actions', () => {
    const initialState: fromSeat.State = {
      ids: [],
      entities: {}
    };

    it('should load cinema hall seats', () => {
      const seat1 = generateMockSeat('FREE');
      const seat2 = { ...seat1, id: 1001 };
      const action = SeatActions.loadCinemaHallSeatsSuccess({
        seats: [seat1, seat2]
      });
      const result = reducer(initialState, action);
      expect(result).toMatchSnapshot();
    });

    it('should book seat', () => {
      const seat1 = generateMockSeat('FREE');
      const seat2 = { ...seat1, id: 1001 };
      const initialState1: fromSeat.State = {
        ids: [seat1.id, seat2.id],
        entities: { [seat1.id]: seat1, [seat2.id]: seat2 }
      };
      const action = SeatActions.bookSeat({ seatId: seat2.id });
      const result = reducer(initialState1, action);
      expect(result).toMatchSnapshot();
    });

    it('should cancel seat booking', () => {
      const seat1 = generateMockSeat('FREE');
      const seat2 = { ...generateMockSeat('BOOKED'), id: 1001 };
      const initialState1: fromSeat.State = {
        ids: [seat1.id, seat2.id],
        entities: { [seat1.id]: seat1, [seat2.id]: seat2 }
      };
      const action = SeatActions.cancelSeatBooking({ seatId: seat2.id });
      const result = reducer(initialState1, action);
      expect(result).toMatchSnapshot();
    });
  });

  describe('order actions', () => {
    it('should proceed order', () => {
      const seat1 = generateMockSeat('FREE');
      const seat2 = { ...seat1, id: 1001 };
      const initialState1: fromSeat.State = {
        ids: [seat1.id, seat2.id],
        entities: { [seat1.id]: seat1, [seat2.id]: seat2 }
      };
      const action = OrderActions.proceedOrder({ ids: [seat1.id, seat2.id] });
      const result = reducer(initialState1, action);
      expect(result).toMatchSnapshot();
    });

    it('should cancel order', () => {
      const seat1 = generateMockSeat('BOOKED');
      const seat2 = { ...seat1, id: 1001 };
      const initialState1: fromSeat.State = {
        ids: [seat1.id, seat2.id],
        entities: { [seat1.id]: seat1, [seat2.id]: seat2 }
      };
      const action = OrderActions.cancelOrder({ ids: [seat1.id, seat2.id] });
      const result = reducer(initialState1, action);
      expect(result).toMatchSnapshot();
    });
  });
});
