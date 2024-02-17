import { requestGetData } from '../../../services/data';

import { getDataRequest, setDataSuccess, showDataFailure } from './actions';

export const loadDataAsync = () => (dispatch) => {
  dispatch(getDataRequest());

  requestGetData()
    .then((response) => dispatch(setDataSuccess(response.data.data, response.data.teachers)))
    .catch((error) => dispatch(showDataFailure(error)));
};
