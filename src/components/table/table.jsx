import { useState } from 'react';
import Select from 'react-select';

import { Row } from './row';

import AutoFill from '../../assets/auto-fill.svg';
import AddSubgroup from '../../assets/plus.svg';
import RevoveCart from '../../assets/remove-cart.png';

import { AddRemoveButton, AutoFillButton, Form, InputNumber, Textarea, selectStyles } from './styled-table';

export const Table = () => {
  const teachers = [
    { value: 'vacancy', label: 'Вакансия', isDisabled: true },
    { value: 'ocean', label: 'Ocean', isFixed: true },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple', isDisabled: true },
    { value: 'red', label: 'Red', isFixed: true },
    { value: 'orange', label: 'Orange' },
  ];

  const [isSubgroup, setIsSubgroup] = useState(false);
  const [selectedLecturesTeacher, setSelectedLecturesTeacher] = useState(teachers[0]);
  const [selectedLabsTeacher, setSelectedLabsTeacher] = useState(teachers[0]);

  const [countStudents, setCountStudents] = useState(0);
  const [note, setNote] = useState('');

  const handleChangeNote = (event) => {
    setNote(event.target.value);
  };

  const handleChangeCountStudents = (event) => {
    setCountStudents(event.target.value);
  };

  return (
    <Form isSubgroup={isSubgroup}>
      <Row lesson='Занятие' hours='Часы' isTitled={true} isSubgroup={isSubgroup}>
        <AddRemoveButton type='button' onClick={() => setIsSubgroup(!isSubgroup)} isSubgroup={isSubgroup}>
          {isSubgroup ? (
            <img src={RevoveCart} alt='remove subgroup cart' />
          ) : (
            <img src={AddSubgroup} alt='remove subgroup cart' />
          )}
        </AddRemoveButton>
      </Row>
      <Row lesson='Лекции' hours='22' isSubgroup={isSubgroup}>
        <Select
          name='lectures'
          options={teachers}
          defaultValue={selectedLecturesTeacher}
          onChange={setSelectedLecturesTeacher}
          styles={selectStyles}
        />
        <AutoFillButton>
          <img src={AutoFill} alt='auto filling teachers button' />
        </AutoFillButton>
      </Row>
      <Row lesson='Лабораторные работы' hours='0' isSubgroup={isSubgroup}>
        <Select
          name='labs'
          options={teachers}
          defaultValue={selectedLabsTeacher}
          onChange={setSelectedLabsTeacher}
          styles={selectStyles}
        />
      </Row>
      <Row lesson='Практические' hours='42' isSubgroup={isSubgroup}></Row>
      <Row lesson='Семинарские' hours='0' isSubgroup={isSubgroup}></Row>
      <Row lesson='Практические' hours='' isSubgroup={isSubgroup}></Row>
      <Row lesson='Зачет' hours='' isSubgroup={isSubgroup}></Row>
      <Row lesson='Экзамен' hours='' isSubgroup={isSubgroup}></Row>
      <Row lesson='Количество человек' hours='' isSubgroup={isSubgroup}>
        <InputNumber type='number' defaultValue={countStudents} onChange={handleChangeCountStudents} />
      </Row>
      <Row lesson='Примечание' hours='' isSubgroup={isSubgroup}>
        <Textarea name='note' onChange={handleChangeNote} />
      </Row>
    </Form>
  );
};
