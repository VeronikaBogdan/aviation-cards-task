import styled from 'styled-components';

import { BLUE, LIGHT_GRAY } from '../../../styles/constant';

export const StyledCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ isTitled }) => isTitled && '5px'};
  padding: 10px;
  border-right: 1px solid ${LIGHT_GRAY};
  border-left: ${({ isLeft }) => isLeft && `1px solid ${LIGHT_GRAY}`};
  font-weight: ${({ isTitled }) => isTitled && 700};
  color: ${({ isTitled }) => isTitled && BLUE};
  text-align: center;
`;
