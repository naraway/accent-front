import { NaraException } from '../../../core';


class ActorKey {
  private static MEMBER_DELIMITER = '@';
  private static HIERARCHY_DELIMITER = ':';
  private static SPACE_DELIMITER = '-';

  id: string;

  private constructor(id: string) {
    //
    this.id = id;
  }

  static fromId(id: string) {
    //
    return new ActorKey(id);
  }

  static fromCitizenId(citizenId: string, stageId: string) {
    //
    return new ActorKey(`${citizenId.substring(0, citizenId.indexOf(this.MEMBER_DELIMITER))}@${stageId}`);
  }

  genAudienceId() {
    const memberId = `${this.getMemberSequence()}${ActorKey.MEMBER_DELIMITER}${this.genCineroomId()}`;
    if (!memberId) {
      throw new NaraException('ActorKey', 'Invalid member id');
    }

    return memberId;
  }

  genCitizenId() {
    const memberId = `${this.getMemberSequence()}${ActorKey.MEMBER_DELIMITER}${this.genPavilionId()}`;
    if (!memberId) {
      throw new NaraException('ActorKey', 'Invalid member id');
    }

    return memberId;
  }

  genDenizenId() {
    const memberId = `${this.getMemberSequence()}${ActorKey.MEMBER_DELIMITER}${this.genSquareId()}`;
    if (!memberId) {
      throw new NaraException('ActorKey', 'Invalid member id');
    }

    return memberId;
  }

  genStageId() {
    this.validate();

    const spaceId = this.id.substring(this.id.indexOf(ActorKey.MEMBER_DELIMITER) + 1);
    if (!spaceId) {
      throw new NaraException('ActorKey', 'Invalid space id');
    }

    return spaceId;
  }

  genCineroomId() {
    const stageId = this.genStageId();

    const spaceId = stageId.substring(0, stageId.indexOf(ActorKey.SPACE_DELIMITER));
    if (!spaceId) {
      throw new NaraException('ActorKey', 'Invalid space id');
    }

    return spaceId;
  }

  genPavilionId() {
    const cineroomId = this.genCineroomId();

    const spaceId = cineroomId.substring(0, cineroomId.lastIndexOf(ActorKey.HIERARCHY_DELIMITER));
    if (!spaceId) {
      throw new NaraException('ActorKey', 'Invalid space id');
    }

    return spaceId;
  }

  genSquareId() {
    const pavilionId = this.genPavilionId();

    const spaceId = pavilionId.substring(0, pavilionId.lastIndexOf(ActorKey.HIERARCHY_DELIMITER));
    if (!spaceId) {
      throw new NaraException('ActorKey', 'Invalid space id');
    }

    return spaceId;
  }

  genStationId() {
    const squareId = this.genSquareId();

    const spaceId = squareId.substring(0, squareId.lastIndexOf(ActorKey.HIERARCHY_DELIMITER));
    if (!spaceId) {
      throw new NaraException('ActorKey', 'Invalid space id');
    }

    return spaceId;
  }

  private getMemberSequence() {
    this.validate();

    const sequence = this.id.substring(0, this.id.indexOf(ActorKey.MEMBER_DELIMITER));
    if (!sequence) {
      throw new NaraException('ActorKey', 'Invalid member sequence');
    }

    return sequence;
  }

  private validate() {
    if (!this.id
      || !this.id.includes(ActorKey.MEMBER_DELIMITER)
      || !this.id.includes(ActorKey.HIERARCHY_DELIMITER)
      || !this.id.includes(ActorKey.SPACE_DELIMITER))
    {
      throw new NaraException('ActorKey', 'Invalid actor key');
    }

    if (!/.+@.+:.+:.+:.+\-.+/.test(this.id)) {
      throw new NaraException('ActorKey', 'Invalid actor key format');
    }
  }
}

export default ActorKey;
