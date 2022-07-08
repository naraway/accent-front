import CodeName from './CodeName';


class CodeNameList {
  //
  codeNames: CodeName[] = [];

  constructor(codeNames: CodeName[]) {
    this.codeNames = codeNames;
  }

  static fromDomain(domain: CodeNameList) {
    return new CodeNameList(CodeName.fromDomains(domain.codeNames));
  }
}

export default CodeNameList;
