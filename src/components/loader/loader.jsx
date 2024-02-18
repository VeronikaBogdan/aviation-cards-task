import { GridLoader } from 'react-spinners';

import { COBALT } from '../../styles/constant';

import { LoaderWrapper } from './styled-loader';

export const Loader = () => (
  <LoaderWrapper>
    <GridLoader color={COBALT} margin={7} />
  </LoaderWrapper>
);
