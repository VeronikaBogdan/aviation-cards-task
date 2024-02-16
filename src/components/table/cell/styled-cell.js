import styled from 'styled-components';

import { BLUE, LIGHT_BLUE_1, LIGHT_BLUE_2, LIGHT_GRAY } from '../../../styles/constant';

export const StyledCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ isTitled }) => isTitled && '5px'};
  padding: 10px;
  border-top: 1px solid ${LIGHT_GRAY};
  border-right: 1px solid ${LIGHT_GRAY};
  border-bottom: ${({ isTitled }) => (isTitled ? `2px solid ${BLUE}` : `1px solid ${LIGHT_GRAY}`)};
  border-left: ${({ isLeft }) => isLeft && `1px solid ${LIGHT_GRAY}`};
  font-weight: ${({ isTitled }) => isTitled && 700};
  color: ${({ isTitled }) => isTitled && BLUE};
  text-align: center;

  &:nth-child(6n + 4),
  &:nth-child(6n + 5),
  &:nth-child(6n + 6) {
    background-color: ${({ isSubgroup }) => !isSubgroup && LIGHT_BLUE_1};
  }

  &:nth-child(8n + 5),
  &:nth-child(8n + 6),
  &:nth-child(8n + 7),
  &:nth-child(8n + 8) {
    background-color: ${({ isSubgroup }) => isSubgroup && LIGHT_BLUE_1};
  }

  &:nth-child(6n + 7),
  &:nth-child(6n + 8),
  &:nth-child(6n + 9) {
    background-color: ${({ isSubgroup }) => !isSubgroup && LIGHT_BLUE_2};
  }

  &:nth-child(8n + 9),
  &:nth-child(8n + 10),
  &:nth-child(8n + 11),
  &:nth-child(8n + 12) {
    background-color: ${({ isSubgroup }) => isSubgroup && LIGHT_BLUE_2};
  }

  &:nth-last-child(-n + 2) {
    grid-column: ${({ isSubgroup }) => isSubgroup && '3 / 5'};
  }

  &:last-child {
    display: ${({ isSubgroup }) => isSubgroup && 'none'};
  }
`;
