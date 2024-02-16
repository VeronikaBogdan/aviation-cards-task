import { Header, ImageBook, StyledCard } from './styled-card';

import book from '../../assets/open-book-icon.png';
import { DetailsInfo } from '../details-info';

export const Card = () => (
  <StyledCard>
    <Header>
      <ImageBook src={book} />
      <span>Конкретная авиационная техника</span>
    </Header>
    <DetailsInfo />
  </StyledCard>
);
