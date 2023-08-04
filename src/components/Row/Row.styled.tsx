import styled from 'styled-components';

export const Row = styled.li`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  align-items: center;
  background-color: aliceblue;
  margin-bottom: 0.5rem;
  border-radius: 0.2rem;
  padding: 1rem;
  column-gap: 1rem;
  max-height: fit-content;
`;

export const Cell = styled.span`
  flex: 1;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const NameIconWrapper = styled.div`
  background-color: gray;
  border-radius: 50%;
  min-width: 4rem;
  min-height: 4rem;

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
