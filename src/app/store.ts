import { ActionReducerMap } from '@ngrx/store';
import { combineSlices, configureStore as rtkConfigureStore } from "@reduxjs/toolkit";

import { counterReducer } from './counter.reducer'

const counterKey = 'count'

export interface IAppState {
    [counterKey]: any;
}
  
export const rootReducer: ActionReducerMap<IAppState> = {
    [counterKey]: counterReducer,
};

// export const reducer = createReducer(
//     initState
// );

// export const store = rtkConfigureStore({
//     reducer: combineReducers(counterReducer),
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware() // .concat(errorMiddleware),
// });

// export const store = combineReducers({count: counterReducer})

