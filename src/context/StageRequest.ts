import { UserType } from './UserType';

export interface StageRequest {
  username: string;
  userType: keyof typeof UserType;
  displayName?: string;
  email?: string;
  enabled?: boolean;
  actorId?: string;
  pavilionId?: string;
  osid?: string;
  usid?: string;
  kollectionId?: string;
  dramaId?: string;
  cineroomIds?: string[];
  roles?: string[];
  attributes?: { [key: string]: string[] };
}
