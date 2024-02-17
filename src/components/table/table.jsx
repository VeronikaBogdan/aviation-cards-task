import { useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { useFormContext, Controller } from 'react-hook-form';

import { Row } from './row';

import AutoFill from '../../assets/auto-fill.svg';
import AddSubgroup from '../../assets/plus.svg';
import RevoveCart from '../../assets/remove-cart.png';

import { AddRemoveButton, AutoFillButton, Form, InputNumber, Textarea, selectStyles } from './styled-table';

export const Table = ({ teachersOptions, index }) => {
  const { register } = useFormContext();
  const { data } = useSelector((state) => state.data);

  const [isSubgroup, setIsSubgroup] = useState(data[index].countPodgroups > 1);
  const [countPodgroups, setCountPodgroups] = useState(data[index].countPodgroups);

  return (
    <Form isSubgroup={isSubgroup}>
      <Row lesson='Занятие' hours='Часы' isTitled={true} isSubgroup={isSubgroup}>
        <AddRemoveButton
          type='button'
          onClick={() => {
            countPodgroups === '1' ? setCountPodgroups('2') : setCountPodgroups('1');
            setIsSubgroup(!isSubgroup);
          }}
          isSubgroup={isSubgroup}
        >
          {isSubgroup ? (
            <img src={RevoveCart} alt='remove subgroup cart' />
          ) : (
            <img src={AddSubgroup} alt='remove subgroup cart' />
          )}
        </AddRemoveButton>
      </Row>
      <Row lesson='Лекции' hours={data[index].lecturesHours} isSubgroup={isSubgroup}>
        <Controller
          name={`lectureTeacher-0-${index}`}
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
        <AutoFillButton>
          <img src={AutoFill} alt='auto filling teachersOptions button' />
        </AutoFillButton>
      </Row>
      <Row lesson='Лабораторные работы' hours={data[index].laboratoryHours} isSubgroup={isSubgroup}>
        <Controller
          name={`laboratoryTeacher-0-${index}`}
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
      </Row>
      <Row lesson='Практические' hours={data[index].practicHours} isSubgroup={isSubgroup}>
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
      </Row>
      <Row lesson='Семинарские' hours={data[index].seminarHours} isSubgroup={isSubgroup}>
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
      </Row>
      {data[index].offset && (
        <Row lesson='Зачет' hours='' isSubgroup={isSubgroup}>
          <Controller
            name={`offsetTeacher-0-${index}`}
            render={({ field }) => (
              <Select {...field} options={teachersOptions} placeholder='Вакансия' styles={selectStyles} />
            )}
          />
        </Row>
      )}
      {data[index].exam && (
        <Row lesson='Экзамен' hours='' isSubgroup={isSubgroup}>
          <Controller
            name={`examTeacher-0-${index}`}
            render={({ field }) => (
              <Select {...field} options={teachersOptions} placeholder='Вакансия' styles={selectStyles} />
            )}
          />
        </Row>
      )}
      {countPodgroups > 1 && (
        <Row lesson='Количество человек' hours='' isSubgroup={isSubgroup}>
          <InputNumber
            {...register(`countStudents-0-${index}`)}
            type='number'
            defaultValue={data[index].podgroups[0].countStudents}
            min={1}
            max={data[index].studentsNumber}
          />
        </Row>
      )}
      <Row lesson='Примечание' hours='' isSubgroup={isSubgroup}>
        <Textarea {...register(`additionalInfo-${index}`)} defaultValue={data[index].additionalInfo} />
      </Row>
    </Form>
  );
};
