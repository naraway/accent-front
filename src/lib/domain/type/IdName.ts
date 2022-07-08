import { makeAutoObservable } from 'mobx';


class IdName {
  //
  id: string;
  name: string;
  usid: string;

p
  constructor(id: string = '', name: string = '', usid: string = '') {
    //
    makeAutoObservable(this);
    this.id = id;
    this.name = name;
    this.usid = usid;
  }

  static fromDomain(domain: IdName): IdName {
    //
    return new IdName(domain.id, domain.name, domain.usid);
  }

  static fromModel(model: any): IdName {
    //
    return new IdName(model.id, model.name, model.usid);
  }

  static new(): IdName {
    //
    return new IdName('', '', '');
  }

  [key: string]: any;
}

export default IdName;
