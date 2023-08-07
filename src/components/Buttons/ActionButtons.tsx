import { Button } from './ActionButton.styled';

interface ActionButtonProps {
  icon: JSX.Element;
  onClick: () => void;
}

export const ActionButton = ({ icon, onClick }: ActionButtonProps) => (
  <Button onClick={onClick}>{icon}</Button>
);
