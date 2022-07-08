import { default as Tier } from '../type/Tier';


class Email {
  //
  email: string = '';
  tier: Tier = Tier.Primary;
  verified: boolean = false;

  constructor(email: string, tier: Tier, verified: boolean) {
    //
    this.email = email;
    this.tier = tier;
    this.verified = verified;
  }

  static fromDomain(domain: Email) {
    return new Email(domain.email, domain.tier, domain.verified);
  }

  static fromDomains(domains: Email[]) {
    return domains.map(domain => this.fromDomain(domain));
  }
}

export default Email;
