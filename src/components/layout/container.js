import styled from 'styled-components';

import { DARK_GREEN, GREEN, LIGHT_GRAY, WHITE } from '../../styles/constant';

export const StyledContainer = styled.form`
  margin: 0 auto;
  padding: 15px 0;
  width: calc(100vw - 50px);
  max-width: 1440px;

  @media (max-width: 935px) {
    max-width: 640px;
  }

  @media (max-width: 450px) {
    width: calc(100vw - 20px);
  }
`;

export const Content = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin-bottom: 15px;

  @media (max-width: 935px) {
    grid-template-columns: 1fr;
  }
`;

export const InputSubmit = styled.input`
  background-color: ${GREEN};
  padding: 8px 15px;
  border: 0;
  border-radius: 3px;
  color: ${WHITE};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${DARK_GREEN};
  }

  &:active {
    background-color: ${DARK_GREEN};
    box-shadow: 0px 0px 5px 3px ${LIGHT_GRAY};
  }
`;
