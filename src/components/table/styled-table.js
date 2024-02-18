import styled from 'styled-components';

import { BLUE, COBALT, LIGHT_GRAY, MAYA_BLUE, WHITE } from '../../styles/constant';

export const Form = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 4fr;
  /* grid-template-columns: ${({ isSubgroup }) => (isSubgroup ? '2fr 1fr 2fr 2fr' : '2fr 1fr 3fr')}; */
  margin-top: 15px;
`;

export const AddRemoveButton = styled.button.attrs(() => ({ type: 'button' }))`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 3px;
  background-color: ${WHITE};
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 0px 5px 3px ${LIGHT_GRAY};
  }

  &:active {
    box-shadow: 0px 0px 5px 1px ${BLUE};
  }
`;

export const AutoFillButton = styled.button.attrs(() => ({ type: 'button' }))`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${BLUE};
  width: 39px;
  height: 100%;
  padding: 7px;
  border: 0;
  border-radius: 3px;
  margin-left: 3px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${MAYA_BLUE};
  }
`;

export const InputNumber = styled.input.attrs(() => ({ type: 'number' }))`
  background-color: transparent;
  border: 0;
  outline: 0;
  text-align: center;
  appearance: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  border-radius: 3px;

  &:hover {
    border: 1px solid ${MAYA_BLUE};
  }

  &:focus,
  &:active {
    border: 1px solid ${COBALT};
    outline: 0;
  }
`;

export const selectStyles = {
  container: (styles) => ({ ...styles, width: '100%' }),
  menuList: (styles) => ({ ...styles, maxHeight: '130px' }),
};
