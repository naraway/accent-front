import IdName from '../IdName';

class ContextCredential {
  //
  loginId: string = '';
  displayName: string = '';
  workspaces: IdName[] = [];
  station: string = '';
  metros: string[] = [];
  towns: string[] = [];


  constructor(loginId: string, displayName: string, workspaces: IdName[], station: string, metros: string[], towns: string[]) {
    this.loginId = loginId;
    this.displayName = displayName;
    this.workspaces = workspaces;
    this.station = station;
    this.metros = metros;
    this.towns = towns;
  }

  static fromDomain(domain: ContextCredential) {
    return new ContextCredential(
      domain.loginId,
      domain.displayName,
      domain.workspaces,
      domain.station,
      domain.metros,
      domain.towns,
    );
  }

  static fromDomains(domains: ContextCredential[]) {
    return domains.map(domain => this.fromDomain(domain));
  }
}

export default ContextCredential;
