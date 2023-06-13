import { sliceCalls } from './callsSlice';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  calls: sliceCalls,
});

export const store = configureStore({
  reducer: rootReducer,
});
