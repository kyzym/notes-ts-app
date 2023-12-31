import { Note } from '../../../types/types';

export const initialState: Note[] = [
  {
    id: '1',
    name: 'Buy everything from the corner store',
    createdAt: 'January 15, 2023',
    content:
      "Need to buy milk, eggs, walls and roof from the corner store. Don't forget the cat food!",
    dates: ['20/1/2023', '25/1/2023'],
    category: 'Task',
    isArchived: false,
  },
  {
    id: '2',
    name: 'Hard is not always easy',
    createdAt: 'February 01, 2023',
    content:
      "Always remember, 'Hard is not always easy'. But that doesn't mean it's impossible!",
    dates: ['15/2/2023', '25/2/2023'],
    category: 'Random Thought',
    isArchived: false,
  },
  {
    id: '3',
    name: 'Try to do more push-ups than Chuck Norris',
    createdAt: 'March 01, 2023',
    content:
      "Can I do more push-ups than Chuck Norris? Probably not. But it's worth a try!",
    dates: ['15/3/2023', '25/3/2023'],
    category: 'Idea',
    isArchived: false,
  },
  {
    id: '4',
    name: "Don't forget to water the cat",
    createdAt: 'April 01, 2023',
    content:
      "The cat seems a bit hot. Don't forget to sprinkle some water on it to cool down!",
    dates: ['10/4/2023', '15/4/2023'],
    category: 'Task',
    isArchived: false,
  },
  {
    id: '5',
    name: 'Can squirrels really fly?',
    createdAt: 'May 01, 2023',
    content:
      'I saw a squirrel jumping from one tree to another. It looked like it was flying!',
    dates: ['15/5/2023', '25/5/2023'],
    category: 'Random Thought',
    isArchived: false,
  },
  {
    id: '6',
    name: 'Plan a trip to Tatooine',
    createdAt: 'June 01, 2023',
    content:
      'I need to plan my next vacation. Maybe I should visit Tatooine from Star Wars!',
    dates: ['15/6/2023', '25/6/2023'],
    category: 'Idea',
    isArchived: false,
  },
  {
    id: '7',
    name: 'Learn to make tables from pizza',
    createdAt: 'July 01, 2023',
    content: 'I love pizza! Maybe I can learn how to make tables out of it!',
    dates: ['15/7/2023', '25/7/2023'],
    category: 'Task',
    isArchived: false,
  },
];
