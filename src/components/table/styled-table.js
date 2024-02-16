import styled from 'styled-components';

import { BLUE, LIGHT_GRAY, WHITE } from '../../styles/constant';

export const Form = styled.form`
  /* display: grid; */
  /* grid-template-columns: 2fr 1fr 3fr; */
  margin-top: 15px;
`;

export const PlusButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-top: -3px;
  padding-bottom: 3px;
  background-color: ${WHITE};
  border: 0;
  font-size: 30px;
  font-weight: 400;
  color: ${BLUE};
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 5px 3px ${LIGHT_GRAY};
  }

  &:active {
    box-shadow: 0px 0px 5px 1px ${BLUE};
  }
`;
