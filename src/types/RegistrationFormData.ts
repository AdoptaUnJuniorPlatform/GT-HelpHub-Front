// src/types/RegistrationFormData.ts

export interface ProfileData {
  description?: string;
  location?: string;
  profilePicture?: File;
  preferredTimeRange?: string;
  selectedDays?: string[];
  interestedSkills?: string[];
}

export interface HabilityData {
  title?: string;
  level?: string;
  mode?: string;
  description?: string;
  category?: string;
}

export interface RegistrationFormData {
  profileData: ProfileData;
  habilityData: HabilityData;
}
