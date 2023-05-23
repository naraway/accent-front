import { ActorKey, AudienceKey, CineroomKey, CitizenKey, StageKey, TenantKey, TenantType } from '../../tenant';

const actorKey = (id: string | TenantKey) => {
  const keyId = typeof id == 'string' ? id : (id as TenantKey).id;
  return <
    ActorKey & {
      audienceId: string;
      citizenId: string;
      stageId: string;
      cineroomId: string;
      pavilionId: string;
    }
  >{
    id,
    type: TenantType.Actor,
    audienceId: `${tenantPart(keyId)}@${stageToCineroom(workspacePart(keyId))}`,
    citizenId: `${tenantPart(keyId)}@${cineroomToPavilion(stageToCineroom(workspacePart(keyId)))}`,
    stageId: workspacePart(keyId),
    cineroomId: stageToCineroom(workspacePart(keyId)),
    pavilionId: cineroomToPavilion(stageToCineroom(workspacePart(keyId))),
  };
};

const audienceKey = (id: string | TenantKey) => {
  const keyId = typeof id == 'string' ? id : (id as TenantKey).id;
  return <
    AudienceKey & {
      citizenId: string;
      cineroomId: string;
      pavilionId: string;
    }
  >{
    id,
    type: TenantType.Audience,
    citizenId: `${tenantPart(keyId)}@${cineroomToPavilion(workspacePart(keyId))}`,
    cineroomId: workspacePart(keyId),
    pavilionId: cineroomToPavilion(workspacePart(keyId)),
  };
};

const citizenKey = (id: string | TenantKey) => {
  const keyId = typeof id == 'string' ? id : (id as TenantKey).id;
  return <
    CitizenKey & {
      pavilionId: string;
    }
  >{
    id,
    type: TenantType.Citizen,
    pavilionId: workspacePart(keyId),
  };
};

const stageKey = (id: string | TenantKey) => {
  const keyId = typeof id == 'string' ? id : (id as TenantKey).id;
  return <
    StageKey & {
      pavilionId: string;
      cineroomId: string;
    }
  >{
    id,
    type: TenantType.Stage,
    cineroomId: stageToCineroom(keyId),
    pavilionId: cineroomToPavilion(stageToCineroom(keyId)),
  };
};

const cineroomKey = (id: string | TenantKey) => {
  const keyId = typeof id == 'string' ? id : (id as TenantKey).id;
  return <
    CineroomKey & {
      pavilionId: string;
    }
  >{
    id,
    type: TenantType.Cineroom,
    pavilionId: cineroomToPavilion(keyId),
  };
};

const tenantPart = (id: string) => id.split('@').shift() ?? '';
const workspacePart = (id: string) => id.split('@').pop() ?? '';
const stageToCineroom = (id: string) => id.split('-').shift() ?? '';
const cineroomToPavilion = (id: string) => id.split(':').slice(0, 3).join(':');

export default {
  actorKey,
  audienceKey,
  citizenKey,
  stageKey,
  cineroomKey,
};
