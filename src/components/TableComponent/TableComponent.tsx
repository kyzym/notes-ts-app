import { useEffect, useState } from 'react';
import { calculateCategoryCounts } from '../../helpers/calculateCategoryCounts';
import { useAppSelector } from '../../hooks/hooks';
import {
  selectActiveNotes,
  selectAllNotes,
  selectArchivedNotes,
} from '../../redux/features/notes/selectors';
import { NoteButton } from '../Buttons/NoteButton/NoteButton';
import { HeaderToggle } from '../HeaderToggle/HeaderToggle';
import { NoteModal } from '../Modal/Modal';
import { RowComponent } from '../Row/Row';
import { HeaderItem, List, Table, TableHeader } from './TableComponent.styled';
import { Note } from '../../types/types';

interface TableProps {
  headers: string[];
  isSummary: boolean;
}

export const TableComponent = ({ headers, isSummary }: TableProps) => {
  const [showArchived, setShowArchived] = useState(false);
  const [isModalHidden, setModalHidden] = useState(true);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);

  const notes = useAppSelector(selectAllNotes);
  const categoriesData = calculateCategoryCounts(notes);

  const activeNotes = useAppSelector(selectActiveNotes);
  const archivedNotes = useAppSelector(selectArchivedNotes);

  const toggleArchive = () => {
    setShowArchived(!showArchived);
  };

  useEffect(() => {
    if (showArchived && archivedNotes.length === 0) {
      setShowArchived(false);
    }
  }, [archivedNotes, showArchived]);

  const openModal = () => {
    setModalHidden(false);
  };

  const openEditModal = (note: Note) => {
    setCurrentNote(note);
    setModalHidden(false);
  };

  const closeModal = () => {
    setCurrentNote(null);
    setModalHidden(true);
  };

  return (
    <>
      <Table>
        <TableHeader $isSummary={isSummary}>
          {headers.map((header, index) =>
            header !== '' ? (
              <HeaderItem key={header}>{header}</HeaderItem>
            ) : (
              <HeaderToggle
                toggleArchive={toggleArchive}
                isArchived={!!archivedNotes.length}
                showArchived={showArchived}
                key={index}
              />
            )
          )}
        </TableHeader>
        <List>
          {!isSummary &&
            (showArchived ? archivedNotes : activeNotes).map((note) => (
              <RowComponent
                data={note}
                key={note.id}
                isSummary={false}
                onEditClick={() => openEditModal(note)}
              />
            ))}

          {isSummary &&
            Object.entries(categoriesData).map(([category, counts]) => (
              <RowComponent
                data={{ category, ...counts }}
                key={category}
                isSummary={isSummary}
              />
            ))}
        </List>
        {!isSummary && !showArchived && (
          <NoteButton type="button" onClick={openModal}>
            Create Note
          </NoteButton>
        )}
      </Table>
      <NoteModal
        isHidden={isModalHidden}
        close={closeModal}
        noteToEdit={currentNote ? currentNote : undefined}
      />
    </>
  );
};
