import { Dispatch, SetStateAction } from "react";

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


export interface AvilityContextType {
  showEditor: boolean;
  setShowEditor: Dispatch<SetStateAction<boolean>>;
  userHabilities: UserHabilitiesResponse | null;
  setUserHabilities: Dispatch<SetStateAction<UserHabilitiesResponse | null>>;
  allHabilities: Hability[] | null;
  filteredHabilities: Hability[] | null;
  setFilteredHabilities: Dispatch<SetStateAction<Hability[]>>;
  selectedCategory: string | null;
  setSelectedCategory: Dispatch<SetStateAction<string | null>>; 
  fetchUserHabilities: () => void;
  fetchAllHabilities: () => void;
  fetchFilteredHabilities: (category: string | null) => Promise<void>;
  deleteHability: (id: string) => void;
}