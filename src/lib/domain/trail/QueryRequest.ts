import AbstractQuery from "./AbstractQuery";
import TrailMessageType from "./TrailMessageType";
import { Constructor } from "../../core";


class QueryRequest<T extends object | object[]> extends AbstractQuery<T> {
  //
  constructor(modelType: Constructor) {
    //
    super(TrailMessageType.QueryRequest, modelType);
  }
}

export default QueryRequest;
