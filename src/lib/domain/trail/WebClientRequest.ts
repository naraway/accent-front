import CommandResponse from './CommandResponse';
import { ClientRequest } from "./";


class WebClientRequest extends ClientRequest {
  //
  constructor() {
    super();
  }

  get response(): CommandResponse | null {
    //
    return this.getNullableModel();
  }
}

export default WebClientRequest;
