import { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { useFormContext, Controller } from 'react-hook-form';

import { Row } from './row';

import AutoFill from '../../assets/auto-fill.svg';
import AddSubgroup from '../../assets/plus.svg';
import RevoveCart from '../../assets/remove-cart.png';

import {
  AddRemoveButton,
  AutoFillButton,
  InputNumber,
  StyledTable,
  Textarea,
  Wrapper,
  selectStyles,
} from './styled-table';

export const Table = ({ teachersOptions, index }) => {
  const { register, getValues, setValue } = useFormContext();
  const { data } = useSelector((state) => state.data);

  const [isSubgroup, setIsSubgroup] = useState(data[index].countPodgroups > 1);
  const [podgroups, setPodgroups] = useState(data[index].podgroups);

  const fillAllSelects = (indexPodgroup) => {
    const lectureTeacher = getValues(`lectureTeacher-${indexPodgroup}-${index}`);

    if (+data[index].lecturesHours) setValue(`laboratoryTeacher-${indexPodgroup}-${index}`, lectureTeacher);
    if (+data[index].practicHours) setValue(`practiceTeacher-${indexPodgroup}-${index}`, lectureTeacher);
    if (+data[index].seminarHours) setValue(`seminarTeacher-${indexPodgroup}-${index}`, lectureTeacher);
    if (data[index].offset) setValue(`offsetTeacher-${indexPodgroup}-${index}`, lectureTeacher);
    if (data[index].exam) setValue(`examTeacher-${indexPodgroup}-${index}`, lectureTeacher);
  };

  const copyData = structuredClone(data);

  return (
    <StyledTable>
      <Row lesson='Занятие' hours='Часы' isTitled={true} isSubgroup={isSubgroup}>
        {podgroups.length === 1 ? (
          <Wrapper>
            <p>Преподаватель</p>
            <AddRemoveButton
              onClick={() => {
                const halfStudents = copyData[index].studentsNumber / 2;
                const podgroups = copyData[index].podgroups;

                podgroups.push({ ...podgroups[0] });

                setValue(`countStudents-0-${index}`, String(Math.ceil(halfStudents)));
                setValue(`countStudents-1-${index}`, String(~~halfStudents));

                setPodgroups(podgroups);
                setIsSubgroup(!isSubgroup);
              }}
            >
              <img src={AddSubgroup} alt='add subgroup cart' />
            </AddRemoveButton>
          </Wrapper>
        ) : (
          <>
            <Wrapper $isSubgroup={isSubgroup}>
              <p>Подгруппа 1</p>
            </Wrapper>
            <Wrapper>
              <p>Подгруппа 2</p>
              <AddRemoveButton
                onClick={() => {
                  setValue(`countStudents-0-${index}`, data[index].studentsNumber);
                  setValue(`countStudents-1-${index}`, '');
                  podgroups.pop();

                  setPodgroups(podgroups);
                  setIsSubgroup(!isSubgroup);
                }}
              >
                <img src={RevoveCart} alt='remove subgroup cart' />
              </AddRemoveButton>
            </Wrapper>
          </>
        )}
      </Row>
      <Row lesson='Лекции' hours={data[index].lecturesHours} isSubgroup={isSubgroup}>
        {podgroups.map((_, indexPodgroup) => (
          <Wrapper key={indexPodgroup} $isSubgroup={isSubgroup}>
            <Controller
              name={`lectureTeacher-${indexPodgroup}-${index}`}
              render={({ field }) => (
                <Select
                  {...field}
                  options={teachersOptions}
                  placeholder='Вакансия'
                  styles={selectStyles}
                  isDisabled={!+data[index].lecturesHours}
                />
              )}
            />
            <AutoFillButton onClick={() => fillAllSelects(indexPodgroup)}>
              <img src={AutoFill} alt='auto filling teachersOptions button' />
            </AutoFillButton>
          </Wrapper>
        ))}
      </Row>
      <Row lesson='Лабораторные работы' hours={data[index].laboratoryHours} isSubgroup={isSubgroup}>
        {podgroups.map((_, indexPodgroup) => (
          <Wrapper $isSubgroup={isSubgroup}>
            <Controller
              key={indexPodgroup}
              name={`laboratoryTeacher-${indexPodgroup}-${index}`}
              render={({ field }) => (
                <Select
                  {...field}
                  options={teachersOptions}
                  placeholder='Вакансия'
                  styles={selectStyles}
                  isDisabled={!+data[index].laboratoryHours}
                />
              )}
            />
          </Wrapper>
        ))}
      </Row>
      <Row lesson='Практические' hours={data[index].practicHours} isSubgroup={isSubgroup}>
        <Wrapper $isSubgroup={isSubgroup}>
          <Controller
            name={`practiceTeacher-0-${index}`}
            render={({ field }) => (
              <Select
                {...field}
                options={teachersOptions}
                placeholder='Вакансия'
                styles={selectStyles}
                isDisabled={!+data[index].practicHours}
              />
            )}
          />
        </Wrapper>
      </Row>
      <Row lesson='Семинарские' hours={data[index].seminarHours} isSubgroup={isSubgroup}>
        <Wrapper $isSubgroup={isSubgroup}>
          <Controller
            name={`seminarTeacher-0-${index}`}
            render={({ field }) => (
              <Select
                {...field}
                options={teachersOptions}
                placeholder='Вакансия'
                styles={selectStyles}
                isDisabled={!+data[index].seminarHours}
              />
            )}
          />
        </Wrapper>
      </Row>
      {data[index].offset && (
        <Row lesson='Зачет' hours='' isSubgroup={isSubgroup}>
          <Wrapper $isSubgroup={isSubgroup}>
            <Controller
              name={`offsetTeacher-0-${index}`}
              render={({ field }) => (
                <Select {...field} options={teachersOptions} placeholder='Вакансия' styles={selectStyles} />
              )}
            />
          </Wrapper>
        </Row>
      )}
      {data[index].exam && (
        <Row lesson='Экзамен' hours='' isSubgroup={isSubgroup}>
          <Wrapper $isSubgroup={isSubgroup}>
            <Controller
              name={`examTeacher-0-${index}`}
              render={({ field }) => (
                <Select {...field} options={teachersOptions} placeholder='Вакансия' styles={selectStyles} />
              )}
            />
          </Wrapper>
        </Row>
      )}
      {podgroups.length === 2 && (
        <Row lesson='Количество человек' hours='' isSubgroup={isSubgroup}>
          {podgroups.map((_, indexPodgroup, podgroups) => (
            <InputNumber
              key={indexPodgroup}
              {...register(`countStudents-${indexPodgroup}-${index}`)}
              defaultValue={podgroups[indexPodgroup].countStudents}
            />
          ))}
        </Row>
      )}
      <Row lesson='Примечание' hours=''>
        <Textarea {...register(`additionalInfo-${index}`)} defaultValue={data[index].additionalInfo} />
      </Row>
    </StyledTable>
  );
};
