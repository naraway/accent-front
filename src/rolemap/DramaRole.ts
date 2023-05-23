export interface DramaRole {
  readonly code: string;
  name: string;
  description?: string;
  defaultRole: boolean;
  readonly dramaId: string;
}
