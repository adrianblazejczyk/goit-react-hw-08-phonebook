import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  status: '',
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
