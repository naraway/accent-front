import { makeAutoObservable } from 'mobx';
import { StringList } from '~/lib/domain';


class LangPreference {
  //
  private defaultLang: string;
  private supportLangs: StringList;

  constructor(defaultLang: string, supportLangs: StringList) {
    makeAutoObservable(this);
    this.defaultLang = defaultLang;
    this.supportLangs = supportLangs;
  }


  static fromDomain(domain: LangPreference) {
    return new LangPreference(domain.defaultLang, domain.supportLangs);
  }

}

export default LangPreference;
