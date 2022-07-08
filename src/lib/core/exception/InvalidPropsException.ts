import NaraException from './NaraException';


class InvalidPropsException extends NaraException {
  //
  constructor(moduleName: string, message: string) {
    //
    super(moduleName, message);

    super.name = 'InvalidPropsException';
    super.message = NaraException.getMessage('@nara.drama', moduleName, message);
  }
}

export default InvalidPropsException;
