import { Cell } from '../cell';
import { StyledRow } from './styled-row';

export const Row = ({ lesson, hours, isTitled, children }) => (
  <StyledRow isTitled={isTitled}>
    <Cell label={lesson} isTitled={isTitled} isLeft />
    <Cell label={hours} isTitled={isTitled} />
    <Cell label={isTitled && 'Преподаватель'} isTitled={isTitled}>
      {children}
    </Cell>
  </StyledRow>
);
