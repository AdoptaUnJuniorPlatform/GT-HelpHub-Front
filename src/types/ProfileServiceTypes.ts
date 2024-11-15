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