import { FailureMessage } from './FailureMessage';
import { Offset } from '~/type';

export interface QueryResponse<T = any> {
  queryResult: T;
  requestFailed: boolean;
  failureMessage?: FailureMessage;
  offset: Offset<T extends Array<infer U> ? U : T>;
}
