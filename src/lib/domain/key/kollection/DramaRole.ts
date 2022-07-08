class DramaRole {
  //
  code: string;
  name: string;
  description: string;
  defaultRole: boolean;
  dramaId: string;

  constructor(
    code: string,
    name: string,
    description: string,
    defaultRole: boolean,
    dramaId: string,
  ) {
    //
    this.code = code;
    this.name = name;
    this.description = description;
    this.defaultRole = defaultRole;
    this.dramaId = dramaId;
  }

  static fromDomain(domain: DramaRole): DramaRole {
    //
    return new DramaRole(
      domain.code,
      domain.name,
      domain.description,
      domain.defaultRole,
      domain.dramaId,
    );
  }
}

export default DramaRole;
