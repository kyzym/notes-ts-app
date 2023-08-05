import { createSelector } from 'reselect';
import { RootState } from '../../store';
import { Note } from '../../../types/types';

export const selectAllNotes = (state: RootState): Note[] => state.notes;

export const selectActiveNotes = createSelector(
  (state: RootState) => state.notes,
  (notes) => notes.filter((note) => !note.isArchived)
);

export const selectArchivedNotes = createSelector(
  (state: RootState) => state.notes,
  (notes) => notes.filter((note) => note.isArchived)
);
