import { Dispatch, SetStateAction } from "react";

export interface UserId {
  _id: string;
}

export interface ProfileByIdResponse {
  _id: string;
  userId: UserId;
  description: string;
  interestedSkills: string[];
  location: string;
  profilePicture: string;
  preferredTimeRange: string;
  selectedDays: string[];
  __v: number;
}

export interface ProfileByIdErrorResponse {
  error: string;
  details?: string;
}

export interface ProfileContextType {
  profile: ProfileByIdResponse | null;
  profiles: ProfileByIdResponse[] | null;
  setProfile: Dispatch<SetStateAction<ProfileByIdResponse | null>>;
  postalCodeError: boolean;
  setPostalCodeError: (value: boolean) => void;
  fetchProfile: () => void;
  fetchAllProfiles: () => void;
}