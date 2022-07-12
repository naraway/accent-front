import NaraException from './NaraException';


class NotInstantiatedException extends NaraException {
  //
  constructor(moduleName: string, message: string) {
    //
    super(moduleName, message);

    super.name = 'NotInstantiatedException';
    super.message = NaraException.getMessage('@nara-way', moduleName, message);
  }
}

export default NotInstantiatedException;
