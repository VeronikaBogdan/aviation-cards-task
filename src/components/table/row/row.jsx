import { Cell } from '../cell';
import { SubgroupWrapper } from '../cell/styled-cell';

export const Row = ({ lesson, hours, isTitled, isSubgroup, children }) => (
  <>
    <Cell label={lesson} isTitled={isTitled} isLeft />
    <Cell label={hours} isTitled={isTitled} />
    <Cell isSubgroup={isSubgroup} isTitled={isTitled}>
      <SubgroupWrapper $isSubgroup={isSubgroup}>{children}</SubgroupWrapper>
    </Cell>
  </>
);
