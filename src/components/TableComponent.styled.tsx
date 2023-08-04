import styled from 'styled-components';

export const Table = styled.div`
  margin-top: 2%;

  font-weight: 500;
`;

export const TableHeader = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  align-items: center;
  /* padding-left: 1rem;
  padding-right: 1rem; */

  margin-bottom: 1.6rem;
  background-color: gray;
  border-radius: 0.4rem;
  padding: 0.8rem;
  color: white;

  :first-child {
    margin-left: 4.5rem;
  }
`;

export const HeaderItem = styled.li`
  flex: 1;
`;
