import { contactsReducer } from './contacts-slice';
import { filterReducer } from './filter-slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
