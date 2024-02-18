import styled from 'styled-components';

import { BLUE, LIGHT_BLUE_1, LIGHT_BLUE_2, LIGHT_GRAY } from '../../../styles/constant';

export const StyledCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ $isTitled }) => $isTitled && '5px'};
  padding: ${({ $isSubgroup }) => ($isSubgroup ? '0' : '10px')};
  border-top: 1px solid ${LIGHT_GRAY};
  border-right: 1px solid ${LIGHT_GRAY};
  border-bottom: ${({ $isTitled }) => ($isTitled ? `2px solid ${BLUE}` : `1px solid ${LIGHT_GRAY}`)};
  border-left: ${({ $isLeft }) => $isLeft && `1px solid ${LIGHT_GRAY}`};
  font-weight: ${({ $isTitled }) => $isTitled && 700};
  color: ${({ $isTitled }) => $isTitled && BLUE};
  text-align: center;
  width: 100%;

  &:nth-child(6n + 4),
  &:nth-child(6n + 5),
  &:nth-child(6n + 6) {
    background-color: ${LIGHT_BLUE_1};
  }

  &:nth-child(6n + 7),
  &:nth-child(6n + 8),
  &:nth-child(6n + 9) {
    background-color: ${LIGHT_BLUE_2};
  }
`;

export const SubgroupWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ $isSubgroup }) => ($isSubgroup ? '1fr 1fr' : '1fr')};
  width: 100%;
  height: 100%;
`;
