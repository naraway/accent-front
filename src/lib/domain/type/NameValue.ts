class NameValue {
  //
  name: string;
  value: string;

  constructor(name: string, value: string) {
    //
    this.name = name;
    this.value = value;
  }

  static fromDomain(domain: NameValue): NameValue {
    //
    return new NameValue(domain.name, domain.value);
  }
}

export default NameValue;
