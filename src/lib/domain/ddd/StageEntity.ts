import DomainEntity from "~/lib/domain/ddd/DomainEntity";
import ActorKey from "~/lib/domain/key/stage/ActorKey";

abstract class StageEntity extends DomainEntity {
  //
  requesterKey: ActorKey | null = null;


  constructor(stageEntity?: StageEntity) {
    //
    super(stageEntity);

    if (stageEntity) {
      this.requesterKey = stageEntity.requesterKey;
    }
  }

  setStageEntity(stageEntity: StageEntity) {
    //
    this.setDomainEntity(stageEntity);

    this.requesterKey = stageEntity.requesterKey;
  }
}

export default StageEntity;
