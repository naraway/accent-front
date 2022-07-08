import Connector from './Connector';
import Operator from './Operator';


class QueryParam {
  //
  fieldName: string = '';
  operation: Operator = Operator.Equal;
  value: string = '';
  connector: Connector = Connector.End;

  constructor(fieldName: string, operation: Operator, value: string, connector: Connector) {
    //
    this.fieldName = fieldName;
    this.operation = operation;
    this.value = value;
    this.connector = connector;
  }

  static endParam(fieldName: string, operation: Operator, value: string | string[]): QueryParam {
    //
    if (value instanceof Array) {
      return new QueryParam(fieldName, operation, arrayToString(value), Connector.End);
    } else {
      return new QueryParam(fieldName, operation, value, Connector.End);
    }
  }

  static orParam(fieldName: string, operation: Operator, value: string | string[]): QueryParam {
    //
    if (value instanceof Array) {
      return new QueryParam(fieldName, operation, arrayToString(value), Connector.Or);
    } else {
      return new QueryParam(fieldName, operation, value, Connector.Or);
    }
  }

  static andParam(fieldName: string, operation: Operator, value: string | string[]): QueryParam {
    //
    if (value instanceof Array) {
      return new QueryParam(fieldName, operation, arrayToString(value), Connector.And);
    } else {
      return new QueryParam(fieldName, operation, value, Connector.And);
    }
  }
}

const arrayToString = (values: string[]): string => {
  if (values.length === 0) {
    return '["*"]';
  }
  const valuesString = values.map(value => `${'"'}${value}${'"'}`).toString();
  return `[${valuesString}]`;
};

export default QueryParam;
