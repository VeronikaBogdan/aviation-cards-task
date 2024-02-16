import { StyledCell } from './styled-cell';

export const Cell = ({ isTitled, label, isLeft, children }) => (
  <StyledCell isTitled={isTitled} isLeft={isLeft}>
    <span>{label}</span>
    {children}
  </StyledCell>
);
