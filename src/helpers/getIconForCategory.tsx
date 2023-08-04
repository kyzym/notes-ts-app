import { FaTasks, FaLightbulb, FaRegCommentDots } from 'react-icons/fa';

export const getIconForCategory = (
  category: string,
  size: number,
  color: string
) => {
  switch (category) {
    case 'Task':
      return <FaTasks size={size} color={color} />;
    case 'Idea':
      return <FaLightbulb size={size} color={color} />;
    case 'Random Thought':
      return <FaRegCommentDots size={size} color={color} />;
    default:
      return null;
  }
};
