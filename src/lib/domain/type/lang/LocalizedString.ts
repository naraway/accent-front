class LocalizedString {
  //
  defaultLocale: string = '';
  localeStringMap: { [key: string]: string } = {};

  constructor(defaultLocale: string) {
    //
    this.defaultLocale = defaultLocale;
  }

  static fromDomain(domain: LocalizedString): LocalizedString {
    const localizedString = new LocalizedString(
      domain.defaultLocale,
    );

    localizedString.localeStringMap = domain.localeStringMap || {};
    return localizedString;
  }
}

export default LocalizedString;
