import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { Note } from '../../../types/types';

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.push(action.payload);
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const index = state.findIndex((note) => note.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeNote: (state, action: PayloadAction<string>) => {
      return state.filter((note) => note.id !== action.payload);
    },
    toggleArchiveNote: (state, action: PayloadAction<string>) => {
      const note = state.find((note) => note.id === action.payload);
      if (note) {
        note.isArchived = !note.isArchived;
      }
    },
  },
});

export const { addNote, editNote, removeNote, toggleArchiveNote } =
  notesSlice.actions;

export default notesSlice.reducer;
