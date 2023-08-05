import React, { useEffect } from 'react';
import { useNoteForm } from '../../hooks/useNoteForm';
import { Note } from '../../types/types';
import { NoteButton } from '../Buttons/NoteButton/NoteButton';
import { Backdrop, CloseModalButton, Modal, NoteForm } from './Modal.styled';

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
  const {
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
  } = useNoteForm(noteToEdit, close);

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
        <NoteForm className="note-form" onSubmit={createOrEditNote}>
          <input
            type="text"
            name="name"
            placeholder="Enter the name of your note. Max 80 characters"
            maxLength={80}
            value={name}
            onChange={handleNameChange}
          />
          <span className="error-message">{errors.name}</span>
          <textarea
            name="content"
            rows={3}
            placeholder="Write your note. Min 5, Max 120 characters. Date format: MM/DD/YYYY"
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
