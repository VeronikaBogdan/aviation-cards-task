import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';

import { loadDataAsync } from './redux/reducers/data/thunks';

import { changeCountStudents, changeTeachers } from './utils/podrgoup-changer';

import { Card } from './components/card';
import { Content, InputSubmit, StyledContainer } from './components/layout/container';

export const App = () => {
  const dispatch = useDispatch();
  const methods = useForm();
  const { data, isPending, isError } = useSelector((state) => state.data);

  const isVisible = !isPending && !isError;

  useEffect(() => {
    dispatch(loadDataAsync());
  }, []);

  const copyData = structuredClone(data);
  const keys = [
    'lectureTeacher',
    'laboratoryTeacher',
    'practiceTeacher',
    'seminarTeacher',
    'examTeacher',
    'offsetTeacher',
    'countStudents',
  ];

  const onSubmit = (data) =>
    console.log(
      'app',
      data,
      '\ncopyData',
      copyData.map((card, index) => {
        card.additionalInfo = data[`additionalInfo-${index}`] || card.additionalInfo;
        card.podgroups.map((podgroup, indexPodgroup) => {
          changeCountStudents(index, podgroup, indexPodgroup, data);
          keys.map((key) => changeTeachers(key, index, podgroup, indexPodgroup, data));
        });
      }),
      '\npodgroups',
      copyData
    );

  return (
    <FormProvider {...methods}>
      {isPending && <div>Loading...</div>}
      {isVisible && (
        <StyledContainer onSubmit={methods.handleSubmit(onSubmit)}>
          <Content>
            {data.map((card, index) => (
              <Card key={card.uniqueId} index={index} />
            ))}
          </Content>
          <InputSubmit type='submit' />
        </StyledContainer>
      )}
    </FormProvider>
  );
};
