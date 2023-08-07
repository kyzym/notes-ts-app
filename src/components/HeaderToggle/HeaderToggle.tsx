import { getIconForCategory } from '../../helpers/getIconForCategory';
import { HeaderItem } from '../TableComponent/TableComponent.styled';
import {
  ArchiveToggle,
  ArchiveToggleText,
  IconWrapper,
  ToggleWrapper,
} from './HeaderToggle.styled';

interface HeaderToggleProps {
  isArchived: boolean;
  showArchived: boolean;
  toggleArchive: () => void;
}

export const HeaderToggle = ({
  showArchived,
  isArchived,
  toggleArchive,
}: HeaderToggleProps) => {
  return (
    <HeaderItem>
      <ToggleWrapper>
        <ArchiveToggle
          disabled={!isArchived}
          onClick={toggleArchive}
          $showArchived={showArchived}
          $isArchived={isArchived}>
          {isArchived && (
            <ArchiveToggleText>
              {showArchived ? 'Show active' : 'Show archived'}
            </ArchiveToggleText>
          )}

          <IconWrapper className="icon-wrapper">
            {getIconForCategory('Archive', 30, '')}
          </IconWrapper>
        </ArchiveToggle>
        <IconWrapper>{getIconForCategory('Trash', 30, 'white')}</IconWrapper>
      </ToggleWrapper>
    </HeaderItem>
  );
};
