import styled from 'styled-components';

import { BLUE, LIGHT_GRAY } from '../../styles/constant';

export const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;
  padding: 5px 0 20px;
  border-top: 2px solid ${LIGHT_GRAY};
  border-bottom: 2px solid ${LIGHT_GRAY};
`;

export const Detail = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const DetailName = styled.span`
  font-weight: 700;
  color: ${BLUE};
`;
