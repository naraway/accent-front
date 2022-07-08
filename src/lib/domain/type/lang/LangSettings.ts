import { makeAutoObservable } from 'mobx';

class LangSettings {
  //
  locale: string;

  baseLanguage: string;

  supportLanguages: string[];

  constructor(locale: string, baseLanguage: string, supportedLanguage: string[]) {
    //
    makeAutoObservable(this);

    this.locale = locale;
    this.baseLanguage = baseLanguage;
    this.supportLanguages = supportedLanguage;
  }

  static fromDomain(domain: LangSettings): LangSettings {
    //
    const { locale, baseLanguage, supportLanguages } = domain;

    return new LangSettings(locale, baseLanguage, supportLanguages);
  }
}

export default LangSettings;
