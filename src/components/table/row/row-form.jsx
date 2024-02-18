import { useSelector } from 'react-redux';
import Select from 'react-select';
import { useFormContext, Controller } from 'react-hook-form';

import AutoFill from '../../../assets/auto-fill.svg';

import { Row } from './row';
import { AutoFillButton, Wrapper, selectStyles } from '../styled-table';

export const RowForm = ({ lesson, hours, isSubgroup, podgroups, index, name, teachersOptions }) => {
  const { getValues, setValue } = useFormContext();

  const { data } = useSelector((state) => state.data);

  const fillAllSelects = (data, indexPodgroup, index) => {
    const lectureTeacher = getValues(`lectureTeacher-${indexPodgroup}-${index}`);

    if (+data[index].laboratoryHours) setValue(`laboratoryTeacher-${indexPodgroup}-${index}`, lectureTeacher);
    if (+data[index].practicHours) setValue(`practiceTeacher-${indexPodgroup}-${index}`, lectureTeacher);
    if (+data[index].seminarHours) setValue(`seminarTeacher-${indexPodgroup}-${index}`, lectureTeacher);
    if (data[index].offset) setValue(`offsetTeacher-${indexPodgroup}-${index}`, lectureTeacher);
    if (data[index].exam) setValue(`examTeacher-${indexPodgroup}-${index}`, lectureTeacher);
  };

  const isDisabled = name === 'offsetTeacher' || name === 'examTeacher' ? '' : !+hours;

  return (
    <Row lesson={lesson} hours={hours} isSubgroup={isSubgroup}>
      {podgroups.map((_, indexPodgroup) => (
        <Wrapper $isSubgroup={isSubgroup}>
          <Controller
            key={indexPodgroup}
            name={`${name}-${indexPodgroup}-${index}`}
            render={({ field }) => (
              <Select
                {...field}
                options={teachersOptions}
                placeholder='Вакансия'
                styles={selectStyles}
                isDisabled={isDisabled}
              />
            )}
          />
          {name === 'lectureTeacher' && (
            <AutoFillButton onClick={() => fillAllSelects(data, indexPodgroup, index)}>
              <img src={AutoFill} alt='auto filling teachersOptions button' />
            </AutoFillButton>
          )}
        </Wrapper>
      ))}
    </Row>
  );
};
