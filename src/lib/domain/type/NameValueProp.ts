import { NaraException } from '~/lib/core';
import ModelMapper from './ModelMapper';
import NameValueType from './NameValueType';


type Mapper = (value: any, model: any) => string;

class NameValueProp {
  //
  name: string;
  type: NameValueType;
  mapper?: (value: any, model: any) => string;


  constructor(name: string, type: NameValueType, mapper?: ModelMapper) {
    //.
    this.name = name;
    this.type = type;
    this.mapper = mapper;
  }

  static newJson(name: string) {
    //
    return new NameValueProp(name, NameValueType.Json);
  }

  static newString(name: string) {
    //
    return new NameValueProp(name, NameValueType.String);
  }

  static newMapper(name: string, mapper?: ModelMapper) {
    //
    return new NameValueProp(name, NameValueType.Mapper, mapper);
  }

  getValue(model: any): string {
    //
    const modelValue = model[this.name];
    let value: string;

    if (this.type === NameValueType.Mapper) {
      if (!this.mapper) {
        throw new NaraException('NameValuePropModel', 'NameValueType is Mapper, but mapper function is undefined');
      }
      value = this.mapper(modelValue, model);
    } else if (this.type === NameValueType.Json) {
      value = JSON.stringify(modelValue);
    } else {
      value = modelValue;
    }
    return value;
  }
}

export default NameValueProp;
