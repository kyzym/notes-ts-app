import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './features/notes/notesSlice';

const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
