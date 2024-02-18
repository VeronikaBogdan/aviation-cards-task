import { formCommonDetails } from '../../utils/common-details-former';

import { Detail, DetailName, Details } from './styled-details-info';

export const DetailsInfo = ({ dataIndex }) => (
  <Details>
    {formCommonDetails(dataIndex).map((detail) => (
      <Detail key={detail.key}>
        <DetailName>{detail.name}</DetailName>
        <span>{detail.value}</span>
      </Detail>
    ))}
  </Details>
);
