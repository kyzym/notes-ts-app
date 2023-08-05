import styled from 'styled-components';

export const Table = styled.div`
  margin-top: 2%;

  margin-bottom: 6.4rem;
  font-size: 2.4rem;
  font-weight: bold;
`;

export const TableHeader = styled.ul<{ $isSummary?: boolean }>`
  display: grid;
  grid-template-columns: ${({ $isSummary }) =>
    $isSummary ? 'repeat(3, 1fr)' : 'repeat(6, 1fr)'};

  align-items: center;
  margin-bottom: 1.6rem;
  background-color: gray;
  border-radius: 0.4rem;
  padding: 0.8rem;
  color: white;

  :first-child {
    margin-left: 4.5rem;
  }
  :last-child {
    margin-left: auto;
  }
`;

export const HeaderItem = styled.li`
  display: flex;

  :last-child {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    flex-wrap: nowrap;
    gap: 0.8rem;
  }
`;
