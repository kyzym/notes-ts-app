import styled from 'styled-components';
import { calculateCategoryCounts } from '../helpers/calculateCategoryCounts';
import { useAppSelector } from '../hooks/hooks';
import {
  selectActiveNotes,
  selectAllNotes,
  selectArchivedNotes,
} from '../redux/features/notes/selectors';
import { RowComponent } from './Row/Row';
import { HeaderItem, Table, TableHeader } from './TableComponent.styled';
import { HeaderToggle } from './HeaderToggle/HeaderToggle';
import { useState, useEffect } from 'react';

const List = styled.ul``;

interface TableProps {
  headers: string[];
  isSummary?: boolean;
}

export const TableComponent: React.FC<TableProps> = ({
  headers,
  isSummary,
}) => {
  const [showArchived, setShowArchived] = useState(false);
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

  return (
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
            <RowComponent data={note} key={note.id} isSummary={false} />
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
    </Table>
  );
};
