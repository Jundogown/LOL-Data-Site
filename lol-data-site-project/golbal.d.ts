import userApi from './api/userApi';
import { handleApiError } from './utils/errorHandler';

declare global {
  var userApi: typeof userApi;
  var handleApiError: typeof handleApiError;
}

export {};
