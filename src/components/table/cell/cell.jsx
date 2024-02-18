import { StyledCell } from './styled-cell';

export const Cell = ({ isTitled, label, isLeft, isSubgroup, children }) => (
  <StyledCell $isTitled={isTitled} $isLeft={isLeft} $isSubgroup={isSubgroup}>
    {label && <span>{label}</span>}
    {children}
  </StyledCell>
);
