import styled from 'styled-components';

export const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin: 0 auto;
  padding: 15px 0;
  width: calc(100vw - 100px);
  max-width: 1440px;

  @media (max-width: 768px) {
    max-width: 640px;
  }

  @media (max-width: 320px) {
    max-width: 288px;
    width: 100%;
  }
`;
