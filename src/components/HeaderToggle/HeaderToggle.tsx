import { getIconForCategory } from '../../helpers/getIconForCategory';
import { HeaderItem } from '../TableComponent.styled';
import { ArchiveToggle, ArchiveToggleText } from './HeaderToggle.styled';

interface HeaderToggleProps {
  isArchived: boolean;
  showArchived: boolean;
  toggleArchive: () => void;
}

export const HeaderToggle: React.FC<HeaderToggleProps> = ({
  showArchived,
  isArchived,
  toggleArchive,
}) => {
  return (
    <HeaderItem>
      <ArchiveToggle onClick={toggleArchive}>
        {isArchived && (
          <ArchiveToggleText>
            {showArchived ? 'Show active' : 'Show archived'}
          </ArchiveToggleText>
        )}
        {getIconForCategory('Archive', 30, 'white')}
      </ArchiveToggle>

      {getIconForCategory('Trash', 30, 'white')}
    </HeaderItem>
  );
};
