import NaraException from './NaraException';


class DramaException extends NaraException {
  //
  constructor(moduleName: string, message: string) {
    //
    super(moduleName, message);

    super.name = 'DramaException';
    super.message = NaraException.getMessage('@nara.drama', moduleName, message);
  }
}

export default DramaException;
