import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormContext } from 'react-hook-form';

import AddSubgroup from '../../assets/plus.svg';
import RevoveCart from '../../assets/remove-cart.png';

import { formConstantData } from '../../utils/constant-data-former';

import { Row, RowForm } from './row';

import { AddRemoveButton, InputNumber, NoteWrapper, StyledTable, Textarea, Wrapper } from './styled-table';

export const Table = ({ index }) => {
  const { register, setValue } = useFormContext();
  const { data } = useSelector((state) => state.data);

  const [isSubgroup, setIsSubgroup] = useState(data[index].countPodgroups > 1);
  const [podgroups, setPodgroups] = useState(data[index].podgroups);

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
      {formConstantData(data[index]).map((row) => (
        <RowForm
          key={row.key}
          lesson={row.lesson}
          hours={row.hours}
          isSubgroup={isSubgroup}
          podgroups={podgroups}
          index={index}
          name={row.name}
        />
      ))}
      {data[index].offset && (
        <RowForm lesson='Зачет' isSubgroup={isSubgroup} podgroups={podgroups} index={index} name='offsetTeacher' />
      )}
      {data[index].exam && (
        <RowForm lesson='Экзамен' isSubgroup={isSubgroup} podgroups={podgroups} index={index} name='examTeacher' />
      )}
      {podgroups.length === 2 && (
        <Row lesson='Количество человек' isSubgroup={isSubgroup}>
          {podgroups.map((_, indexPodgroup, podgroups) => (
            <InputNumber
              key={indexPodgroup}
              {...register(`countStudents-${indexPodgroup}-${index}`)}
              defaultValue={podgroups[indexPodgroup].countStudents}
              min={1}
            />
          ))}
        </Row>
      )}
      <Row
        lesson={
          <NoteWrapper>
            <span>Примечание</span>
            <span>(для составления расписания)</span>
          </NoteWrapper>
        }
      >
        <Textarea {...register(`additionalInfo-${index}`)} defaultValue={data[index].additionalInfo} />
      </Row>
    </StyledTable>
  );
};
