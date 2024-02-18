import { apiClient } from '../helpers/apiClient';

export const requestResultData = (resultData) => apiClient.post('test_result', resultData);
