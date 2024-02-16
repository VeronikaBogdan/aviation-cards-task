import { Row } from './row';

import AutoFill from '../../assets/sort-icon.png';

import { AutoFillButton, Form, Option, PlusButton, Select } from './styled-table';
import { useState } from 'react';

export const Table = () => {
  const [isSubgroup, setIsSubgroup] = useState(false);

  return (
    <Form isSubgroup={isSubgroup}>
      <Row lesson='Занятие' hours='Часы' isTitled isSubgroup={isSubgroup}>
        <PlusButton
          type='button'
          onClick={() => setIsSubgroup(!isSubgroup)}
          value={isSubgroup ? '--' : '+'}
          isSubgroup={isSubgroup}
        />
      </Row>
      <Row lesson='Лекции' hours='22' isSubgroup={isSubgroup}>
        <Select name='lectures'>
          {/* <OptionsWrapper> */}
          <Option value='Вакансия' disabled>
            Вакансия
          </Option>
          <Option value='Препод1'>Препод1</Option>
          {/* </OptionsWrapper> */}
        </Select>
        <AutoFillButton>
          <img src={AutoFill} alt='auto filling teachers button' />
        </AutoFillButton>
      </Row>
      <Row lesson='Лабораторные работы' hours='0' isSubgroup={isSubgroup}>
        <Select name='labs' disabled>
          <option value='Вакансия'>Вакансия</option>
          <option value='Препод1'>Препод1</option>
        </Select>
      </Row>
      <Row lesson='Практические' hours='42' isSubgroup={isSubgroup}></Row>
      <Row lesson='Семинарские' hours='0' isSubgroup={isSubgroup}></Row>
      <Row lesson='Практические' hours='' isSubgroup={isSubgroup}></Row>
      <Row lesson='Зачет' hours='' isSubgroup={isSubgroup}></Row>
      <Row lesson='Экзамен' hours='' isSubgroup={isSubgroup}></Row>
      <Row lesson='Примечание' hours='' isSubgroup={isSubgroup}>
        <textarea name='note'></textarea>
      </Row>
    </Form>
  );
};
