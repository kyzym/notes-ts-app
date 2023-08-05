import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Note } from '../types/types';
import { useAppDispatch } from './hooks';
import { extractDates } from '../helpers/extractDates';
import { extractContent } from '../helpers/extractContent';
import { dateFormat } from '../helpers/dateFormat';
import { addNote, editNote } from '../redux/features/notes/notesSlice';
import { validateForm } from '../helpers/validateForm';

export const useNoteForm = (noteToEdit?: Note, close?: () => void) => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState({
    name: null as string | null,
    content: null as string | null,
    category: null as string | null,
  });

  const resetForm = () => {
    setName('');
    setContent('');
    setCategory('');
    setErrors({
      name: null,
      content: null,
      category: null,
    });
  };

  useEffect(() => {
    if (noteToEdit) {
      setName(noteToEdit.name.trim());
      setContent(noteToEdit.content + ' ' + noteToEdit.dates.join(' '));
      setCategory(noteToEdit.category);
    }
  }, [noteToEdit]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      name: e.target.value.length < 1 ? 'Please fill this field' : null,
    }));
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      content:
        e.target.value.length < 5 ? 'Please write 5 symbols or more' : null,
    }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setCategory(e.target.value);

  const createOrEditNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(name, content, category);
    setErrors(validationErrors);
    if (
      validationErrors.name ||
      validationErrors.content ||
      validationErrors.category
    ) {
      return;
    }

    const dates = extractDates(content);
    const contentData = extractContent(content).trim();

    if (noteToEdit) {
      const editingNoteData: Note = {
        ...noteToEdit,
        name,
        content: contentData,
        category,
        dates,
        createdAt: dateFormat(new Date()),
      };

      dispatch(editNote(editingNoteData));
      resetForm();
      close && close();
    } else {
      const noteData: Note = {
        name,
        content: contentData,
        category,
        dates,
        id: uuidv4(),
        isArchived: false,
        createdAt: dateFormat(new Date()),
      };

      dispatch(addNote(noteData));
      resetForm();
    }
  };

  const buttonText = noteToEdit ? 'Change Note' : 'Add Note';

  return {
    name,
    content,
    category,
    errors,
    resetForm,
    handleNameChange,
    handleContentChange,
    handleCategoryChange,
    createOrEditNote,
    buttonText,
  };
};
