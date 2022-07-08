import QueryResponse from "./QueryResponse";
import TrailMessage from "./TrailMessage";
import { Constructor, Offset } from "~/lib";
import TrailMessageType from "./TrailMessageType";


class AbstractQuery<T extends object | object[]> extends TrailMessage<QueryResponse<T>> {
  //
  offset: Offset;

  constructor(messageType: TrailMessageType, modelType: Constructor) {
    super(messageType, modelType, 'response');
    this.offset = Offset.newAscending(0, 10, 'id');
    this.offset.totalCountRequested = false;
  }

  get response(): QueryResponse<T> | null {
    //
    return this.getNullableModel();
  }
}

export default AbstractQuery;
