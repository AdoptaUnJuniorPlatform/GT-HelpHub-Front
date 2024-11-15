export interface AbilityRequestBody {
  title: string;
  level: string;
  mode: string;
  description: string;
  category: string[];
}
export interface HabilityRequest {
  title: string;
  level: string;
  mode: string;
  description: string;
  category: string[];
}

export interface HabilityResponse {
  title: string;
  level: string;
  mode: string;
  description: string;
  category: string[];
  user_id: string;
  _id: string;
  __v: number;
}

export interface HabilityErrorResponse {
  error: string;
}
export interface Hability {
  _id: string;
  title: string;
  level: string;
  mode: string;
  description: string;
  category: string[];
  user_id: string;
  __v: number;
}

export type UserHabilitiesResponse = {
  habilities: Hability[];}

export interface SkillsCardProps extends Hability {
  location: string; 
  availability: string ;
}

export interface CardProps extends SkillsCardProps {
  userFullName: string
  profilePicture: string
}