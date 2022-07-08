import { makeAutoObservable } from 'mobx';
import IdName from './IdName';


class IdNameList {
  //
  idNames: IdName[] = [];


  constructor(...idNames: IdName[]) {
    //
    makeAutoObservable(this);

    this.idNames = idNames;
  }

  static fromDomain(domain: IdNameList): IdNameList {
    //
    const idNameList = new IdNameList();

    if (domain) {
      idNameList.idNames = domain.idNames && domain.idNames.map(idName => IdName.fromDomain(idName)) || [];
    }

    return idNameList;
  }
}

export default IdNameList;
