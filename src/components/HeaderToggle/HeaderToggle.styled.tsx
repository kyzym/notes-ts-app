import styled from 'styled-components';

export const ArchiveToggle = styled.button<{ $showArchived: boolean }>`
  margin: 1rem 0;
  margin-left: 0 !important;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  color: ${({ $showArchived }) => ($showArchived ? 'rgb(0, 100, 139)' : '')};

  :hover {
    color: ${({ $showArchived }) =>
      $showArchived ? 'white' : 'rgb(0, 100, 139)'};
  }
`;

export const IconWrapper = styled.div`
  max-width: 30px;
  flex-shrink: 0;
`;

export const ToggleWrapper = styled.div``;

export const ArchiveToggleText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin-left: 0 !important;
  margin-right: 0.5rem;
`;
