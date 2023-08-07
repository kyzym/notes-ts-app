import styled from 'styled-components';

export const Row = styled.li<{ $isSummary: boolean }>`
  display: grid;
  grid-template-columns: ${({ $isSummary }) =>
    $isSummary ? 'repeat(3, 1fr)' : 'repeat(6, 1fr)'};

  align-items: center;
  background-color: aliceblue;
  margin-bottom: 0.5rem;
  border-radius: 0.2rem;
  padding: 1rem;
  column-gap: 1rem;
  max-height: fit-content;

  font-size: 1.4rem;
  font-weight: 400;
`;

export const Cell = styled.div`
  display: flex;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const NameIconWrapper = styled.div`
  background-color: gray;
  border-radius: 50%;
  min-width: 3rem;
  min-height: 3rem;

  padding: 0.7rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoteActionsWrapper = styled.div`
  margin-left: auto;
  display: flex;
  gap: 0.8rem;
`;

export const ArchiveButtonWrapper = styled.div<{ $archived: boolean }>`
  color: ${({ $archived }) => ($archived ? 'rgb(0, 100, 139)' : '')};
  :hover {
    color: ${({ $archived }) => ($archived ? 'black' : '')};
  }
`;
