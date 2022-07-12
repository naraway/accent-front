import NaraException from './NaraException';


class NoSuchDataException extends NaraException {
  //
  constructor(moduleName: string, message: string) {
    //
    super(moduleName, message);

    super.name = 'NoSuchDataException';
    super.message = NaraException.getMessage('@nara-way', moduleName, message);
  }
}

export default NoSuchDataException;
