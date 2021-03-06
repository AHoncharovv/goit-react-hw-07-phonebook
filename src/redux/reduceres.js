import { createReducer } from '@reduxjs/toolkit';
import { filter } from "./actions";

export const filterReducer = createReducer('', {
    [filter]: (state, action) => state = action.payload,
});