import React, { useEffect, useState } from 'react';
import { Backdrop, Modal, CloseModalButton, NoteForm } from './Modal.styled';
import { NoteButton } from '../Buttons/NoteButton/NoteButton';
import { extractDates } from '../../helpers/extractDates';
import { Note } from '../../types/types';
import { extractContent } from '../../helpers/extractContent';
import { v4 as uuidv4 } from 'uuid';
import { dateFormat } from '../../helpers/dateFormat';
import { useAppDispatch } from '../../hooks/hooks';
import { addNote, editNote } from '../../redux/features/notes/notesSlice';

interface ModalProps {
  isHidden: boolean;
  close: () => void;
  noteToEdit?: Note;
}

export const NoteModal: React.FC<ModalProps> = ({
  isHidden,
  close,
  noteToEdit,
}) => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const [errors, setErrors] = useState({
    name: null as string | null,
    content: null as string | null,
    category: null as string | null,
  });

  const validateForm = (name: string, content: string, category: string) => {
    const errors = {
      name: name.trim().length < 1 ? 'Please fill this field' : null,
      content:
        content.trim().length < 5 ? 'Please write 5 symbols or more' : null,
      category: category === '' ? 'Please choose a category' : null,
    };

    return errors;
  };

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

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      close();
      resetForm();
    }
  };

  useEffect(() => {
    if (!isHidden) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isHidden]);

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

  const createNote = (e: React.FormEvent<HTMLFormElement>) => {
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
      close();
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

  return (
    <Backdrop $isHidden={isHidden} onClick={handleBackdropClick}>
      <Modal>
        <CloseModalButton
          onClick={() => {
            resetForm();
            close();
          }}>
          ✕
        </CloseModalButton>
        <NoteForm className="note-form" onSubmit={createNote}>
          <input
            type="text"
            name="name"
            placeholder="Name of your note.  Max 80 symbols"
            maxLength={80}
            value={name}
            onChange={handleNameChange}
          />
          <span className="error-message">{errors.name}</span>
          <textarea
            name="content"
            rows={3}
            placeholder="Write you note. Max 120 symbols. Date format is: MM/DD/YYYY "
            maxLength={120}
            value={content}
            onChange={handleContentChange}></textarea>
          <span className="error-message">{errors.content}</span>
          <select
            name="category"
            value={category}
            onChange={handleCategoryChange}>
            <option value="">Choose a category</option>
            <option value="Task">Task</option>
            <option value="Random Thought">Random Thought</option>
            <option value="Idea">Idea</option>
          </select>
          <span className="error-message">{errors.category}</span>
          <NoteButton type="submit">{buttonText}</NoteButton>
        </NoteForm>
      </Modal>
    </Backdrop>
  );
};
