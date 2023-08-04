import styled from 'styled-components';
import { Note } from '../types/types';
import { TableHeader, HeaderItem, Table } from './TableComponent.styled';
import { RowComponent } from './Row/Row';
import { calculateCategoryCounts } from '../helpers/calculateCategoryCounts';

const List = styled.ul``;

interface TableProps {
  headers: string[];
  data: Note[];

  isSummary?: boolean;
}

export const TableComponent: React.FC<TableProps> = ({
  headers,
  data,
  isSummary,
}) => {
  const categoriesData = calculateCategoryCounts(data);

  return (
    <Table>
      <TableHeader>
        {headers.map((header) => (
          <HeaderItem key={header}>{header}</HeaderItem>
        ))}
      </TableHeader>
      <List>
        {!isSummary &&
          data.map((note) => (
            <RowComponent data={note} key={note.id} isSummary={false} />
          ))}
        {isSummary &&
          Object.entries(categoriesData).map(([category, counts]) => (
            <RowComponent
              data={{ category, ...counts }}
              key={category}
              isSummary={true}
            />
          ))}
      </List>
      {/* any*/}
    </Table>
  );
};
