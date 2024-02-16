import styled from 'styled-components';

import { BLUE, COBALT, LIGHT_GRAY, MAYA_BLUE, WHITE } from '../../styles/constant';

export const Form = styled.form`
  display: grid;
  grid-template-columns: ${({ isSubgroup }) => (isSubgroup ? '2fr 1fr 2fr 2fr' : '2fr 1fr 3fr')};
  margin-top: 15px;
`;

export const PlusButton = styled.input`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-top: -3px;
  padding-bottom: 3px;
  background-color: ${WHITE};
  border: 0;
  font-size: 30px;
  font-weight: 400;
  color: ${BLUE};
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 5px 3px ${LIGHT_GRAY};
  }

  &:active {
    box-shadow: 0px 0px 5px 1px ${BLUE};
  }
`;

export const AutoFillButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${BLUE};
  width: 45px;
  /* height: 50px; */
  border: 0;
  border-radius: 3px;
  margin-left: 3px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${MAYA_BLUE};
  }
`;

export const Select = styled.select`
  /* width: 100%;
  height: 100px;
  padding: 7px 0;
  border: 1px solid ${LIGHT_GRAY};
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
  appearance: none;
  transition: border 0.2s; */
  font-family: cursive, sans-serif;
  outline: 0;
  background: #2ecc71;
  color: #fff;
  line-height: 30px;
  border: 1px solid crimson;
  padding: 4px;

  &:hover:not([disabled]) {
    border: 1px solid ${MAYA_BLUE};
  }

  &:focus:not([disabled]),
  &:active:not([disabled]) {
    border: 1px solid ${COBALT};
    outline: 0;
  }

  &:not([multiple]) {
    background-repeat: no-repeat;
    background-position: calc(100% - 0.25em) 0.35em;
    background-size: 0.85em auto;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cpath d='M70.3 13.8L40 66.3 9.7 13.8z' fill='%23000'%3E%3C/path%3E%3C/svg%3E");
  }
`;

export const OptionsWrapper = styled.div`
  height: 100px;
`;

export const Option = styled.option`
  /* border-radius: 19px; */
  /* height: 50px !important; */
  /* margin: 7px 0; */
  /* background-color: aquamarine; */
  z-index: 5;
  /* border-radius: 2px; */
`;
