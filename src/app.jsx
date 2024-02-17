import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadDataAsync } from './redux/reducers/data/thunks';

import { Card } from './components/card';
import { StyledContainer } from './components/layout/container';

export const App = () => {
  const dispatch = useDispatch();
  const { data, isPending, isError } = useSelector((state) => state.data);

  const isVisible = !isPending && !isError;

  useEffect(() => {
    dispatch(loadDataAsync());
  }, []);

  return (
    <StyledContainer>
      {isPending && <div>Loading...</div>}
      {isVisible && data.map((card, index) => <Card key={card.uniqueId} index={index} />)}
    </StyledContainer>
  );
};
