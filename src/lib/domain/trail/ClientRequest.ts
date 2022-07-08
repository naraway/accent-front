import CommandResponse from './CommandResponse';
import TrailMessage from "./TrailMessage";
import TrailMessageType from "./TrailMessageType";


class ClientRequest extends TrailMessage<CommandResponse> {
  //
  constructor() {
    super(TrailMessageType.ClientRequest, CommandResponse, '');
  }

  get response(): CommandResponse | null {
    //
    return this.getNullableModel();
  }
}

export default ClientRequest;
