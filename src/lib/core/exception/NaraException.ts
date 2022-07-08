class NaraException extends Error {
  //
  constructor(moduleName: string, message: string) {
    //
    super();

    super.name = 'NaraException';
    super.message = NaraException.getMessage('@nara', moduleName, message);
  }

  // TODO: appName 환경변수로 분리해서 자동으로 로드하도록 변경
  static getMessage(appName: string, moduleName: string, message: string) {
    //
    return `[ ${appName} - ${moduleName} ] ${message}`;
  }
}

export default NaraException;
