import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';

import { loadDataAsync } from './redux/reducers/data/thunks';
import { postResultAsync } from './redux/reducers/result/thunks';

import { changeCountStudents, changeTeachers } from './utils/podrgoup-changer';

import { Card } from './components/card';
import { Content, InputSubmit, StyledContainer } from './components/layout/container';
import { Loader } from './components/loader';

export const App = () => {
  const dispatch = useDispatch();
  const methods = useForm();
  const { data, teachers, isPending, isError } = useSelector((state) => state.data);

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

  const onSubmit = (data) => {
    copyData.map((card, index) => {
      card.additionalInfo = data[`additionalInfo-${index}`] || card.additionalInfo;

      if (data[`countStudents-1-${index}`]) {
        if (card.countPodgroups === '1') {
          card.countPodgroups = '2';
          card.podgroups.push({ countStudents: data[`countStudents-1-${index}`], ...card.podgroups[0] });
        }
      } else {
        if (card.countPodgroups === '2') {
          card.countPodgroups = '1';
          card.podgroups.pop();
        }
      }

      card.podgroups.map((podgroup, indexPodgroup) => {
        changeCountStudents(index, podgroup, indexPodgroup, data);
        keys.map((key) => changeTeachers(key, index, podgroup, indexPodgroup, data));
      });
    });

    dispatch(postResultAsync(copyData));
  };

  return (
    <FormProvider {...methods}>
      {isPending && <Loader />}
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
