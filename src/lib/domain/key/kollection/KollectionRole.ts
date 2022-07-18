import DramaRole from './DramaRole';

class KollectionRole {
  //
  code: string;
  name: string;
  description: string;
  defaultRole: boolean;
  dramaRoles: DramaRole[];

  constructor(
    code: string,
    name: string,
    description: string,
    defaultRole: boolean,
    dramaRoles: DramaRole[],
  ) {
    //
    this.code = code;
    this.name = name;
    this.description = description;
    this.defaultRole = defaultRole;
    this.dramaRoles = dramaRoles;
  }

  static fromDomain(domain: KollectionRole): KollectionRole {
    //
    return new KollectionRole(
      domain.code,
      domain.name,
      domain.description,
      domain.defaultRole,
      domain.dramaRoles,
    );
  }
}

export default KollectionRole;
