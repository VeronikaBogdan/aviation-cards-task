import { Detail, DetailName, Details } from './styled-details-info';

export const DetailsInfo = () => {
  const details = [
    { name: 'Группа', value: 'П120' },
    { name: 'Курс', value: '4' },
    { name: 'Количество курсантов', value: '22' },
    { name: 'Семестр', value: '7' },
  ];

  return (
    <Details>
      {details.map((detail) => (
        <Detail>
          <DetailName>{detail.name}</DetailName>
          <span>{detail.value}</span>
        </Detail>
      ))}
    </Details>
  );
};
