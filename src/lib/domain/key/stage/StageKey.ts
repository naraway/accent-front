import { NaraException } from '../../../core';


class StageKey {
  private static HIERARCHY_DELIMITER = ':';
  private static SPACE_DELIMITER = '-';

  id: string;

  private constructor(id: string) {
    //
    this.id = id;
  }

  static fromId(id: string) {
    //
    return new StageKey(id);
  }

  genCineroomId() {
    const stageId = this.id;

    const spaceId = stageId.substring(0, stageId.indexOf(StageKey.SPACE_DELIMITER));
    if (!spaceId) {
      throw new NaraException('StageKey', 'Invalid space id');
    }

    return spaceId;
  }

  genPavilionId() {
    const cineroomId = this.genCineroomId();

    const spaceId = cineroomId.substring(0, cineroomId.lastIndexOf(StageKey.HIERARCHY_DELIMITER));
    if (!spaceId) {
      throw new NaraException('StageKey', 'Invalid space id');
    }

    return spaceId;
  }

  genSquareId() {
    const pavilionId = this.genPavilionId();

    const spaceId = pavilionId.substring(0, pavilionId.lastIndexOf(StageKey.HIERARCHY_DELIMITER));
    if (!spaceId) {
      throw new NaraException('StageKey', 'Invalid space id');
    }

    return spaceId;
  }

  genStationId() {
    const squareId = this.genSquareId();

    const spaceId = squareId.substring(0, squareId.lastIndexOf(StageKey.HIERARCHY_DELIMITER));
    if (!spaceId) {
      throw new NaraException('StageKey', 'Invalid space id');
    }

    return spaceId;
  }

  private validate() {
    if (!this.id
      || !this.id.includes(StageKey.HIERARCHY_DELIMITER)
      || !this.id.includes(StageKey.SPACE_DELIMITER))
    {
      throw new NaraException('StageKey', 'Invalid stage key');
    }

    if (!/.+:.+:.+:.+\-.+/.test(this.id)) {
      throw new NaraException('StageKey', 'Invalid stage key format');
    }
  }
}

export default StageKey;
