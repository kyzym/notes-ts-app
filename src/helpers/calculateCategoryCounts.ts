import { Note } from '../types/types';

export type CategoryCounts = {
  [category: string]: {
    active: number;
    archived: number;
  };
};

export const calculateCategoryCounts = (notes: Note[]): CategoryCounts => {
  return notes.reduce((counts, note) => {
    const categoryCount = counts[note.category] || { active: 0, archived: 0 };
    if (note.isArchived) {
      categoryCount.archived += 1;
    } else {
      categoryCount.active += 1;
    }
    counts[note.category] = categoryCount;
    return counts;
  }, {} as CategoryCounts);
};
