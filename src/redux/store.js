import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';
import filtersReducer from './filters/filtersSlice';
import authReducer from './auth/authSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    contacts: contactsReducer,
    auth: authReducer,
  },
});