import { requestResultData } from '../../../services/result';

import { postResultRequest, setResultSuccess, showResultFailure } from './actions';

export const postResultAsync = (resultData) => (dispatch) => {
  dispatch(postResultRequest(resultData));

  requestResultData(resultData)
    .then((response) => dispatch(setResultSuccess(response.status)))
    .catch((error) => dispatch(showResultFailure(error)));
};
