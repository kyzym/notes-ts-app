import { FaArchive, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { getIconForCategory } from '../../helpers/getIconForCategory';
import { useAppDispatch } from '../../hooks/hooks';
import {
  removeNote,
  toggleArchiveNote,
} from '../../redux/features/notes/notesSlice';
import { CategoryCounts, Note } from '../../types/types';
import { ActionButton } from '../Buttons/ActionButtons';
import {
  ArchiveButtonWrapper,
  Cell,
  NameIconWrapper,
  NameWrapper,
  NoteActionsWrapper,
  Row,
} from './Row.styled';

interface RowProps {
  data: Note | CategoryCounts;
  isSummary: boolean;
  onEditClick?: () => void;
}

export const RowComponent = ({ data, isSummary, onEditClick }: RowProps) => {
  const dispatch = useAppDispatch();

  const handleRemoveClick = () => {
    dispatch(removeNote((data as Note).id));
  };

  const handleArchiveClick = () => {
    dispatch(toggleArchiveNote((data as Note).id));
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
          <Cell>{category}</Cell>
        </NameWrapper>
        <Cell>{active}</Cell>
        <Cell>{archived}</Cell>
      </Row>
    );
  } else {
    const note = data as Note;

    return (
      <Row $isSummary={false}>
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
