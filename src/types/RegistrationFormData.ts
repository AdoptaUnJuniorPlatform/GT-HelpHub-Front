// src/types/RegistrationFormData.ts

export interface ProfileData {
  description: string;
  interestedSkills: string[];
  location: string;
  profilePicture: string;
  preferredTimeRange: string;
  selectedDays: string[];
}

export interface HabilityData {
  title: string;
  level: string;
  mode: string;
  description: string;
  category: string;
}

export interface RegistrationFormData {
  profileData: ProfileData;
  habilityData: HabilityData;
}
