import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: lightblue;
  cursor: pointer;
  border-radius: 0.5rem;
  width: auto;

  font-size: 2.4rem;
  padding: 0.5rem 2rem;

  float: right;
  margin-top: 0.7rem;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(0, 100, 139);
    color: white;
  }
`;
