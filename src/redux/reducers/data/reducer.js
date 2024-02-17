import { DATA_REQUEST, DATA_SUCCESS, DATA_FAILURE } from './actions';

const initialState = {
  data: {},
  teachers: {},
  isPending: true,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUEST:
      return { ...state, isPending: true };
    case DATA_SUCCESS:
      const { data, teachers } = action;
      return { ...state, data: data, teachers: teachers, isPending: false, isError: null };
    case DATA_FAILURE:
      return { ...state, isPending: false, isError: true };
    default:
      return { ...state };
  }
};
