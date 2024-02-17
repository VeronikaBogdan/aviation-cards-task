import { useSelector } from 'react-redux';

import book from '../../assets/open-book.png';

import { DetailsInfo } from '../details-info';
import { Table } from '../table';

import { Header, ImageBook, StyledCard } from './styled-card';

export const Card = ({ index }) => {
  const { data, teachers } = useSelector((state) => state.data);
  const details = [
    { key: 1, name: 'Группа', value: data[index].groupName },
    { key: 2, name: 'Курс', value: data[index].course },
    { key: 3, name: 'Количество курсантов', value: data[index].studentsNumber },
    { key: 4, name: 'Семестр', value: data[index].semestr },
  ];

  const teachersOptions = [{ value: 'vacancy', label: 'Вакансия', isDisabled: true }];

  teachers.reduce((acc, teacher) => {
    acc.push({ value: teacher.id, label: teacher.name });
    return acc;
  }, teachersOptions);

  return (
    <StyledCard>
      <Header>
        <ImageBook src={book} />
        <span>{data[index].subjectName}</span>
      </Header>
      <DetailsInfo details={details} />
      <Table teachersOptions={teachersOptions} index={index} />
    </StyledCard>
  );
};
