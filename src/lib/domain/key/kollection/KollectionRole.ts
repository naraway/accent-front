class KollectionRole {
  //
  code: string;
  name: string;
  description: string;
  defaultRole: boolean;

  constructor(
    code: string,
    name: string,
    description: string,
    defaultRole: boolean,
  ) {
    //
    this.code = code;
    this.name = name;
    this.description = description;
    this.defaultRole = defaultRole;
  }

  static fromDomain(domain: KollectionRole): KollectionRole {
    //
    return new KollectionRole(
      domain.code,
      domain.name,
      domain.description,
      domain.defaultRole,
    );
  }
}

export default KollectionRole;
