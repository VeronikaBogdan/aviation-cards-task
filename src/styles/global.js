import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
      font-size: 14px;
      line-height: 18px;

      @media (min-width: 480px) {
        font-size: 14px;
        line-height: 18px;
      }
      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 20px;
      }
      @media (min-width: 1440px) {
        font-size: 18px;
        line-height: 22px;
      }
      @media (min-width: 1600px) {
        font-size: 20px;
        line-height: 24px;
      }
    }
`;
