import React from 'react';

import { Note } from '../../types/types';
import {
  Cell,
  NameIconWrapper,
  NameWrapper,
  NoteActionsWrapper,
  Row,
} from './Row.styled';
import { getIconForCategory } from '../../helpers/getIconForCategory';
import { ActionButton } from '../Buttons/ActionButtons';
import { FaArchive, FaPencilAlt, FaTrash } from 'react-icons/fa';

interface CategoryCounts {
  category: string;
  active: number;
  archived: number;
}

interface RowProps {
  data: Note | CategoryCounts;
  isSummary: boolean;
}

export const RowComponent: React.FC<RowProps> = ({ data, isSummary }) => {
  if (isSummary) {
    const { category, active, archived } = data as CategoryCounts;
    return (
      <Row>
        <NameWrapper>
          <NameIconWrapper>
            {getIconForCategory(category, 20, 'white')}
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
            {getIconForCategory(note.category, 20, 'white')}
          </NameIconWrapper>
          <Cell>{note.name}</Cell>
        </NameWrapper>
        <Cell>{note.createdAt}</Cell>
        <Cell>{note.category}</Cell>
        <Cell>{note.content}</Cell>
        <Cell>{note.dates.join(', ')}</Cell>
        <Cell>
          <NoteActionsWrapper>
            <ActionButton icon={<FaPencilAlt size={30} />} onClick={() => {}} />
            <ActionButton icon={<FaArchive size={30} />} onClick={() => {}} />
            <ActionButton icon={<FaTrash size={30} />} onClick={() => {}} />
          </NoteActionsWrapper>
        </Cell>
      </Row>
    );
  }
};
