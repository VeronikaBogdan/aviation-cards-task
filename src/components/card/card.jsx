import { Header, ImageBook, StyledCard } from './styled-card';

import { DetailsInfo } from '../details-info';
import { Table } from '../table';

import book from '../../assets/open-book-icon.png';

export const Card = () => (
  <StyledCard>
    <Header>
      <ImageBook src={book} />
      <span>Конкретная авиационная техника</span>
    </Header>
    <DetailsInfo />
    <Table />
  </StyledCard>
);
