import { Row } from './row';

import AutoFill from '../../assets/sort-icon.png';

import { Form, PlusButton } from './styled-table';

export const Table = () => (
  <Form>
    <Row lesson='Занятие' hours='Часы' isTitled>
      <PlusButton>+</PlusButton>
    </Row>
    <Row lesson='Лекции' hours='22'>
      <select name='lectures'>
        <option value='Вакансия'>Вакансия</option>
        <option value='Препод1'>Препод1</option>
      </select>
      <button>
        <img src='' alt='' />
      </button>
    </Row>
    <Row lesson='Лабораторные работы' hours='0'>
      <select name='labs' disabled>
        <option value='Вакансия'>Вакансия</option>
        <option value='Препод1'>Препод1</option>
      </select>
    </Row>
    <Row lesson='Практические' hours='42'></Row>
    <Row lesson='Семинарские' hours='0'></Row>
    <Row lesson='Практические' hours=''></Row>
    <Row lesson='Зачет' hours=''></Row>
    <Row lesson='Экзамен' hours=''></Row>
    <Row lesson='Примечание' hours=''>
      <textarea name='note'></textarea>
    </Row>
  </Form>
);
