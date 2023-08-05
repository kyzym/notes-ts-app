import React, { useEffect } from 'react';
import { Backdrop, Modal, CloseModalButton, NoteForm } from './Modal.styled';
import { NoteButton } from '../Buttons/NoteButton/NoteButton';

interface ModalProps {
  isHidden: boolean;
  close: () => void;
}

export const NoteModal: React.FC<ModalProps> = ({ isHidden, close }) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      close();
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
    <Backdrop isHidden={isHidden} onClick={handleBackdropClick}>
      <Modal>
        <CloseModalButton onClick={close}>✕</CloseModalButton>
        <NoteForm className="note-form">
          <input
            type="text"
            name="name"
            placeholder="Name of your note.  Max 80 symbols"
            required
            maxLength={80}
          />
          <span className="error-message"></span>
          <textarea
            name="content"
            rows={3}
            placeholder="Write you note. Max 120 symbols. Date format is: MM/DD/YYYY "
            required
            maxLength={120}></textarea>
          <span className="error-message"></span>
          <select name="category" required>
            <option value="">Choose a category</option>
            <option value="Task">Task</option>
            <option value="Random Thought">Random Thought</option>
            <option value="Idea">Idea</option>
          </select>
          <NoteButton type="submit" onClick={() => {}}>
            Add note
          </NoteButton>
        </NoteForm>
      </Modal>
    </Backdrop>
  );
};
