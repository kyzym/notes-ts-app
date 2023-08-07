import { ReactNode } from 'react';
import { StyledButton } from './NoteButton.styled';

interface NoteButtonProps {
  type: 'button' | 'submit';
  children: ReactNode;
  onClick?: () => void;
}

export const NoteButton = ({ type, children, onClick }: NoteButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
