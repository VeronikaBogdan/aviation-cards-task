import { useSelector } from 'react-redux';

import book from '../../assets/open-book.png';

import { DetailsInfo } from '../details-info';
import { Table } from '../table';

import { Header, ImageBook, StyledCard } from './styled-card';

export const Card = ({ index }) => {
  const { data } = useSelector((state) => state.data);

  return (
    <StyledCard>
      <Header>
        <ImageBook src={book} />
        <span>{data[index].subjectName}</span>
      </Header>
      <DetailsInfo dataIndex={data[index]} />
      <Table index={index} />
    </StyledCard>
  );
};
