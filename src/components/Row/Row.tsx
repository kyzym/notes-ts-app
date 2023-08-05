import React from 'react';

import { Note } from '../../types/types';
import {
  ArchiveButtonWrapper,
  Cell,
  NameIconWrapper,
  NameWrapper,
  NoteActionsWrapper,
  Row,
} from './Row.styled';
import { getIconForCategory } from '../../helpers/getIconForCategory';
import { ActionButton } from '../Buttons/ActionButtons';
import { FaArchive, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { useAppDispatch } from '../../hooks/hooks';
import {
  removeNote,
  toggleArchiveNote,
} from '../../redux/features/notes/notesSlice';

interface CategoryCounts {
  category: string;
  active: number;
  archived: number;
}

interface RowProps {
  data: Note | CategoryCounts;
  isSummary: boolean;
  onEditClick?: () => void;
}

export const RowComponent: React.FC<RowProps> = ({
  data,
  isSummary,
  onEditClick,
}) => {
  const dispatch = useAppDispatch();

  const handleRemoveClick = () => {
    if ('id' in data) {
      dispatch(removeNote(data.id));
    }
  };

  const handleArchiveClick = () => {
    if ('id' in data) {
      dispatch(toggleArchiveNote(data.id));
    }
  };

  const handleEditClick = () => {
    if (onEditClick) {
      onEditClick();
    }
  };

  if (isSummary) {
    const { category, active, archived } = data as CategoryCounts;
    return (
      <Row $isSummary={isSummary}>
        <NameWrapper>
          <NameIconWrapper>
            {getIconForCategory(category, 25, 'white')}
          </NameIconWrapper>
          <Cell>{<Cell>{category}</Cell>}</Cell>
        </NameWrapper>
        <Cell>{active}</Cell>
        <Cell>{archived}</Cell>
      </Row>
    );
  } else {
    const note = data as Note;

    return (
      <Row>
        <NameWrapper>
          <NameIconWrapper>
            {getIconForCategory(note.category, 25, 'white')}
          </NameIconWrapper>
          <Cell>{note.name}</Cell>
        </NameWrapper>
        <Cell className="created">{note.createdAt}</Cell>
        <Cell className="category">{note.category}</Cell>
        <Cell>{note.content}</Cell>
        <Cell className="dates">{note.dates.join(', ')}</Cell>
        <Cell className="actions-wrapper">
          <NoteActionsWrapper>
            <ActionButton
              icon={<FaPencilAlt size={30} />}
              onClick={handleEditClick}
            />
            <ArchiveButtonWrapper $archived={note.isArchived}>
              <ActionButton
                icon={<FaArchive size={30} />}
                onClick={handleArchiveClick}
              />
            </ArchiveButtonWrapper>

            <ActionButton
              icon={<FaTrash size={30} />}
              onClick={handleRemoveClick}
            />
          </NoteActionsWrapper>
        </Cell>
      </Row>
    );
  }
};
