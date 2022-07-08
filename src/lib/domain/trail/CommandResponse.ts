import { NaraException } from '~/lib/core';
import FailureMessage from './FailureMessage';


class CommandResponse {
  //
  entityIds: string[] = [];
  requestFailed: boolean = false;
  failureMessageName: string = 'failureMessage';

  getEntityId(): string {
    //
    const entityId = this.entityIds[0];

    if (!entityId) {
      throw new NaraException('CommandResponse', 'entityId is null');
    }
    return entityId;
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

export default CommandResponse;
