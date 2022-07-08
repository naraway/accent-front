abstract class DomainEntity {
  //
  id: string = '';
  entityVersion: number = 0;
  registrationTime: number = 0;
  modificationTime: number = 0;

  constructor(domainEntity?: DomainEntity) {
    //
    if (domainEntity) {
      this.id = domainEntity.id;
      this.entityVersion = domainEntity.entityVersion;
      this.registrationTime = domainEntity.registrationTime;
      this.modificationTime = domainEntity.modificationTime;
    }
  }

  setDomainEntity(domainEntity: DomainEntity) {
    //
    this.id = domainEntity.id;
    this.entityVersion = domainEntity.entityVersion;
    this.registrationTime = domainEntity.registrationTime;
    this.modificationTime = domainEntity.modificationTime;
  }
}

export default DomainEntity;
