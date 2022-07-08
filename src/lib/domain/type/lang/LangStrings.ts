import LangString from './LangString';


class LangStrings {
  //
  defaultLanguage: string = '';
  langStrings: LangString[] = [];

  constructor(defaultLanguage: string) {
    //
    this.defaultLanguage = defaultLanguage;
  }

  set langStringsObj(langStrings: LangString[]) {
    this.langStrings = langStrings;
  }

  static fromDomain(domain: LangStrings): LangStrings {
    const langStrings = new LangStrings(
      domain.defaultLanguage,
    );

    langStrings.langStrings = domain.langStrings ? domain.langStrings : [];
    return langStrings;
  }
}

export default LangStrings;
