import styled from 'styled-components';

export const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin: 0 auto;
  padding: 15px 0;
  width: calc(100vw - 50px);
  max-width: 1440px;

  @media (max-width: 935px) {
    grid-template-columns: 1fr;
    max-width: 640px;
  }

  @media (max-width: 450px) {
    width: calc(100vw - 20px);
  }
`;
