import NaraException from './NaraException';


class InvalidParamsException extends NaraException {
  //
  constructor(moduleName: string, message: string) {
    //
    super(moduleName, message);

    super.name = 'InvalidParamsException';
    super.message = NaraException.getMessage('@nara-way', moduleName, message);
  }
}

export default InvalidParamsException;
