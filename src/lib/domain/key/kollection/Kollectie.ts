class Kollectie {
  //
  path: string;
  name: string;
  description: string;
  requiredRoles: string[];

  constructor(
    path: string,
    name: string,
    description: string,
    requiredRoles: string[],
  ) {
    //
    this.path = path;
    this.name = name;
    this.description = description;
    this.requiredRoles = requiredRoles;
  }

  static fromDomain(domain: Kollectie): Kollectie {
    //
    return new Kollectie(
      domain.path,
      domain.name,
      domain.description,
      domain.requiredRoles,
    );
  }
}

export default Kollectie;
