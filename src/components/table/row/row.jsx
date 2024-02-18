import { Cell } from '../cell';

export const Row = ({ lesson, hours, isTitled, isSubgroup, children }) => (
  <>
    <Cell label={lesson} isTitled={isTitled} isLeft isSubgroup={isSubgroup} />
    <Cell label={hours} isTitled={isTitled} isSubgroup={isSubgroup} />
    {/* {isSubgroup && (
      <Cell label={isTitled && 'Подгруппа 1'} isTitled={isTitled} isSubgroup={isSubgroup}>
        {!isTitled && children}
      </Cell>
    )} */}
    <Cell
      label={isTitled && (isSubgroup ? 'Подгруппа 2' : 'Преподаватель')}
      isTitled={isTitled}
      isSubgroup={isSubgroup}
    >
      {children}
    </Cell>
  </>
);
