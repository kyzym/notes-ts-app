export interface Note {
  id: string;
  name: string;
  createdAt: string;
  content: string;
  dates: string[];
  category: string;
  isArchived: boolean;
}

export interface CategoryCounts {
  category: string;
  active: number;
  archived: number;
}
