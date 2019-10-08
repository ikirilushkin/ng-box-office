import { createAction, props } from '@ngrx/store';

export const proceedOrder = createAction(
  '[Cinema Hall] Proceed Order',
  props<{ ids: number[] }>()
);

export const cancelOrder = createAction(
  '[Cinema Hall] Cancel Order',
  props<{ ids: number[] }>()
);
