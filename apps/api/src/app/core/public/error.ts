import { ErrorProcess } from '../interfaces/error-process.interface';

export const authErrorProcess = (errorInfo: ErrorProcess) => ({
  ...errorInfo,
  type: 'sign'
});
