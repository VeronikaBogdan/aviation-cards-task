import styled from 'styled-components';

import { BLUE, LIGHT_BLUE_1, LIGHT_BLUE_2, LIGHT_GRAY, WHITE } from '../../../styles/constant';

export const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 3fr;
  border-top: 1px solid ${LIGHT_GRAY};
  border-bottom: ${({ isTitled }) => (isTitled ? `2px solid ${BLUE}` : `1px solid ${LIGHT_GRAY}`)};

  &:nth-child(2n + 1) {
    background-color: ${({ isTitled }) => (isTitled ? WHITE : LIGHT_BLUE_2)};
  }

  &:nth-child(2n) {
    background-color: ${LIGHT_BLUE_1};
  }
`;
