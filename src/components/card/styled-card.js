import styled from 'styled-components';

import { BLUE, LIGHT_GRAY, SKY } from '../../styles/constant';

export const StyledCard = styled.section`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid ${LIGHT_GRAY};
  border-radius: 2px;
  box-shadow: 0px 0px 5px 1px ${LIGHT_GRAY};
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  padding: 16px;
  background-color: ${SKY};
  font-weight: 700;
  color: ${BLUE};
  text-align: center;
`;

export const ImageBook = styled.img.attrs(({ src }) => ({
  src: src,
  alt: 'book',
}))`
  width: 18px;
  height: 18px;
`;
