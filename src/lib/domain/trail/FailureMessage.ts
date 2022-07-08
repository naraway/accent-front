class FailureMessage {
  //
  exceptionName: string;
  exceptionMessage: string;
  exceptionCode?: string;

  constructor(exceptionName: string, exceptionMessage = '') {
    //
    this.exceptionName = exceptionName;
    this.exceptionMessage = exceptionMessage;
  }

  static fromDomain(failureMessage: FailureMessage): FailureMessage {
    //
    return new FailureMessage(failureMessage.exceptionName, failureMessage.exceptionMessage);
  }
}

export default FailureMessage;
