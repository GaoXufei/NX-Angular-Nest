export interface ErrorProcess {
  code?: number;
  msg: string;
  status: 'success' | 'failed';
}
