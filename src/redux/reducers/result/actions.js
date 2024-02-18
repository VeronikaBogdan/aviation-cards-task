export const RESULT_REQUEST = 'RESULT_REQUEST';
export const RESULT_SUCCESS = 'RESULT_SUCCESS';
export const RESULT_FAILURE = 'RESULT_FAILURE';

export const postResultRequest = (resultData) => ({
  type: RESULT_REQUEST,
  resultData,
});

export const setResultSuccess = (status) => ({
  type: RESULT_SUCCESS,
  status,
});

export const showResultFailure = (error) => ({
  type: RESULT_FAILURE,
  error,
});
