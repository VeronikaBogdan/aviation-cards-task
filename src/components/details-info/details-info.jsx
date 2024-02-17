import { Detail, DetailName, Details } from './styled-details-info';

export const DetailsInfo = ({ details }) => (
  <Details>
    {details.map((detail) => (
      <Detail key={detail.key}>
        <DetailName>{detail.name}</DetailName>
        <span>{detail.value}</span>
      </Detail>
    ))}
  </Details>
);
