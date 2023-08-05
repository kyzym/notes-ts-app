import { ReactNode } from 'react';
import { StyledButton } from './NoteButton.styled';

interface NoteButtonProps {
  type: 'button' | 'submit';
  children: ReactNode;
  onClick: () => void;
}

export const NoteButton: React.FC<NoteButtonProps> = ({
  type,
  children,
  onClick,
}) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
