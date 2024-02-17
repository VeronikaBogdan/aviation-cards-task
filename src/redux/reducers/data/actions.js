export const DATA_REQUEST = 'DATA_REQUEST';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_FAILURE = 'DATA_FAILURE';

export const getDataRequest = () => ({
  type: DATA_REQUEST,
});

export const setDataSuccess = (data, teachers) => ({
  type: DATA_SUCCESS,
  data,
  teachers,
});

export const showDataFailure = (error) => ({
  type: DATA_FAILURE,
  error,
});
