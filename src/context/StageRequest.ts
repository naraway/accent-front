import { UserType } from './UserType';

export interface StageRequest {
  username: string;
  userType: keyof typeof UserType;
  displayName?: string;
  email?: string;
  enabled?: boolean;
  actorId?: string;
  pavilionId?: string;
  cineroomIds?: string[];
  roles?: string[];
  attributes?: { [key: string]: string[] };
}
