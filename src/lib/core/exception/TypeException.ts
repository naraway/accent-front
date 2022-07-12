import NaraException from './NaraException';


class WorkspaceException extends NaraException {
  //
  constructor(moduleName: string, message: string) {
    //
    super(moduleName, message);

    super.name = 'AuthException';
    super.message = NaraException.getMessage('@nara-way', moduleName, message);
  }
}

export default WorkspaceException;
