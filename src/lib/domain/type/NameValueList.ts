import { Constructor } from '~/lib/core';
import ModelMapper from './ModelMapper';
import NameValue from './NameValue';
import NameValueProp from './NameValueProp';
import NameValueType from './NameValueType';


class NameValueList {
  //
  nameValues: NameValue[] = [];


  constructor(...nameValues: NameValue[]) {
    //
    this.nameValues = nameValues;
  }


  static fromModel<T>(Model: Constructor<T>, model: T, nameValueProps: {
    [P in keyof T]?: NameValueType | String | JSON | ModelMapper<T>;
  }): NameValueList {
    //
    const nameValues = Object.keys(nameValueProps).map((name) => {
      const typeOrMapper = (nameValueProps as any)[name];
      let prop: NameValueProp;

      if (typeof typeOrMapper === 'function') {
        prop = NameValueProp.newMapper(name, typeOrMapper);
      } else {
        prop = new NameValueProp(name, typeOrMapper);
      }

      const value = prop.getValue(model);

      return new NameValue(name, value);
    })
      .filter(nameValue => nameValue.value.length > 0);

    return new NameValueList(...nameValues);
  }
}

export default NameValueList;
