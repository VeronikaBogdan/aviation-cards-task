import { StyledCell, SubgroupWrapper } from './styled-cell';

export const Cell = ({ isTitled, label, isLeft, isSubgroup, children }) => (
  <StyledCell $isTitled={isTitled} $isLeft={isLeft} $isSubgroup={isSubgroup}>
    {label && <span>{label}</span>}
    {/* {isTitled && isSubgroup && (
      <SubgroupWrapper>
        <div>Подгруппа 1</div>
        <div>Подгруппа 2 {children}</div>
      </SubgroupWrapper>
    )} */}
    {children}
  </StyledCell>
);
