import { createReducer ,on } from '@ngrx/store';
import { initialState } from './counter.state';
import { decrement, increment, reset } from './counter.action';
import { state } from '@angular/animations';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
        ...state,
        counter : state.counter + 1
    };
  }),
  on(decrement,(state) =>{
    return {
        ...state,
        counter : state.counter - 1
    };
  }),
  on(reset,(state) =>{
    return {
        ...state,
        counter : 0
    }
  })
);

export function counterReducer(state : any, action : any) {
  return _counterReducer(state, action);
}
