import { useSelector } from 'react-redux';

import book from '../../assets/open-book.png';

import { DetailsInfo } from '../details-info';
import { Table } from '../table';

import { Header, ImageBook, StyledCard } from './styled-card';

export const Card = ({ index }) => {
  const { data } = useSelector((state) => state.data);

  const details = [
    { key: 1, name: 'Группа', value: data[index].groupName },
    { key: 2, name: 'Курс', value: data[index].course },
    { key: 3, name: 'Количество курсантов', value: data[index].studentsNumber },
    { key: 4, name: 'Семестр', value: data[index].semestr },
  ];

  return (
    <StyledCard>
      <Header>
        <ImageBook src={book} />
        <span>{data[index].subjectName}</span>
      </Header>
      <DetailsInfo details={details} />
      <Table />
    </StyledCard>
  );
};
