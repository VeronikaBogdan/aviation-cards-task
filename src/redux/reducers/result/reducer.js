import { RESULT_REQUEST, RESULT_SUCCESS, RESULT_FAILURE } from './actions';

const initialState = {
  status: '',
  isPending: true,
  isError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESULT_REQUEST:
      return { ...state, isPending: true };
    case RESULT_SUCCESS:
      const { status } = action;
      return { ...state, status: status, isPending: false, isError: null };
    case RESULT_FAILURE:
      return { ...state, isPending: false, isError: true };
    default:
      return { ...state };
  }
};
