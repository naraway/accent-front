import { NaraException } from '~/lib/core';
import FailureMessage from './FailureMessage';


class ApiException extends NaraException {
  //
  failureMessage: FailureMessage | null = null;

  constructor(moduleName: string, message: string) {
    //
    super(moduleName, message);

    super.name = 'ApiException';
    super.message = NaraException.getMessage('@nara', moduleName, message);
  }
}

export default ApiException;
