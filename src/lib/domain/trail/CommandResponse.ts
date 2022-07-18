import { NaraException } from '~/lib/core';
import FailureMessage from './FailureMessage';


class CommandResponse {
  //
  entityIds: string[] = [];
  requestFailed: boolean = false;
  failureMessageName: string = 'failureMessage';

  constructor(entityIds: string[], requestFailed: boolean) {
    //
    this.entityIds = entityIds;
    this.requestFailed = requestFailed;
  }

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

  static fromDomain(domain: {
    entityIds: string[],
    requestFailed: boolean,
    failureMessage?: FailureMessage
  }): CommandResponse {
    //
    const commandResponse = new CommandResponse(
      domain.entityIds,
      domain.requestFailed,
    );

    if (domain.failureMessage) {
      commandResponse.setFailureMessage(FailureMessage.fromDomain(domain.failureMessage));
    }

    return commandResponse;
  }

  [key: string]: any;
}

export default CommandResponse;
