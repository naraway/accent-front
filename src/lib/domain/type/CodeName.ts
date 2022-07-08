class CodeName {
  //
  code: string = '';
  name: string = '';

  constructor(code: string, name: string) {
    this.code = code;
    this.name = name;
  }

  static fromDomain(domain: CodeName) {
    return new CodeName(domain.code, domain.name);
  }

  static fromDomains(domains: CodeName[]) {
    return domains.map(domain => this.fromDomain(domain));
  }
}

export default CodeName;
