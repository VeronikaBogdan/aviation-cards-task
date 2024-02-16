import styled from 'styled-components';

import { BLUE, LIGHT_GRAY, SKY } from '../../styles/constant';

export const StyledCard = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px;
  border: 1px solid ${LIGHT_GRAY};
  border-radius: 2px;
  box-shadow: 0px 0px 5px 1px ${LIGHT_GRAY};
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 16px;
  background-color: ${SKY};
  font-weight: 700;
  color: ${BLUE};
`;

export const ImageBook = styled.img.attrs(({ src }) => ({
  src: src,
  alt: 'image: book',
}))`
  width: 18px;
  height: 18px;
`;