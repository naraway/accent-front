import AccessLevel from './AccessLevel';


class PlayerRole {
  name: string;
  accessLevel: AccessLevel;

  constructor(name: string, accessLevel: AccessLevel) {
    //
    this.name = name;
    this.accessLevel = accessLevel;
  }

  static fromDomain(domain: PlayerRole): PlayerRole {
    //
    return new PlayerRole(domain.name, domain.accessLevel);
  }
}

export default PlayerRole;
