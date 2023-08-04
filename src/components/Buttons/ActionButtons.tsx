import React from 'react';
import { Button } from './ActionButton.styled';

interface ActionButtonProps {
  icon: JSX.Element;
  onClick: () => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  onClick,
}) => <Button onClick={onClick}>{icon}</Button>;
