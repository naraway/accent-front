import { Offset } from '~/lib/domain/type';
import FailureMessage from './FailureMessage';


class QueryResponse<T extends object | object[]> {
  //
  offset?: Offset = undefined;
  requestFailed: boolean = false;
  failureMessageName: string = 'failureMessage';

  get queryResult(): T | T[] | null {
    //
    return this.getResponse();
  }

  get success(): boolean {
    //
    return !this.requestFailed;
  }

  get failed(): boolean {
    //
    return this.requestFailed;
  }

  getFailureMessage(): FailureMessage {
    //
    return this[this.failureMessageName];
  }

  setFailureMessage(failureMessage: FailureMessage): void {
    //
    this[this.failureMessageName] = failureMessage;
    this.requestFailed = true;
  }

  [key: string]: any;
}

export default QueryResponse;
