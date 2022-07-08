class StringList {
  //
  elements: string[] = [];


  constructor(stringList?: StringList) {
    //
    if (stringList) {
      this.elements = stringList.elements;
    }
  }

  static fromDomain(domain: StringList): StringList {
    //
    return new StringList(domain);
  }
}

export default StringList;
