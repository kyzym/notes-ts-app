import styled from 'styled-components';

export const Backdrop = styled.div<{ $isHidden: boolean }>`
  display: ${({ $isHidden }) => ($isHidden ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  background-color: white;
  padding: 2em;
  border-radius: 0.4rem;
  overflow: hidden;
  width: 600px;
  display: flex;
  flex-direction: column;
`;

export const CloseModalButton = styled.button`
  margin-left: auto;
  border: 1px solid black;
  padding: 7px;
  border-radius: 50%;
  min-width: 30px;
  min-height: 30px;

  &:hover {
    background-color: rgb(0, 100, 139);
    color: white;
  }
`;

export const NoteForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  padding: 1em;
  border: 1px solid black;
  width: 80%;
  margin: auto;
  border-radius: 0.4rem;
  overflow: hidden;

  textarea {
    resize: none;
  }

  input,
  textarea,
  select,
  button {
    margin-top: 0.5em;
    padding: 0.5em;
    border: 1px solid grey;
    border-radius: 0.4rem;
    font-size: 1.6rem;
  }

  button {
    padding: 0.5rem 1.5rem;
    align-self: center;
  }

  .error-message {
    margin-top: 0.2rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: red;
  }
`;
