import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, signOut, checkLoginStatus } from './authOperations';
import Notiflix from 'notiflix';

const isPendingAction = action => {
  return action.type.endsWith('/pending');
};

const isRejectAction = action => {
  return action.type.endsWith('/rejected');
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.isLoggedIn = false;
  if (action.payload !== 'Unable to fetch user') {
    Notiflix.Notify.info('Zaloguj się poprawnymi danymi');
  } else {
    state.token = null;
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder

      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = false;
      })
      .addCase(checkLoginStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
      })

      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected);
  },
});

export default authSlice.reducer;
