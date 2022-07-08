import CommandResponse from './CommandResponse';
import TrailMessage from "./TrailMessage";
import TrailMessageType from "./TrailMessageType";
import CommandType from "./CommandType";


class CommandRequest extends TrailMessage<CommandResponse> {
  //
  commandType: CommandType;

  constructor(commandType?: CommandType) {
    super(TrailMessageType.CommandRequest, CommandResponse, 'response');
    this.commandType = commandType || CommandType.UserDefined;
  }

  get response(): CommandResponse | null {
    //
    return this.getNullableModel();
  }
}

export default CommandRequest;
