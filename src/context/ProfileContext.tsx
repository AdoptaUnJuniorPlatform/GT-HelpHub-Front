import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { allProfiles, profileById } from "../services/ProfileService";
import { ProfileByIdResponse } from "../types/ProfileServiceTypes";

interface ProfileContextType {
  profile: ProfileByIdResponse | null;
  profiles: ProfileByIdResponse[] | null;
  setProfile: Dispatch<SetStateAction<ProfileByIdResponse | null>>;
  fetchProfile: () => void;
  fetchAllProfiles: () => void;
}
  
const ProfileContext = createContext<ProfileContextType | undefined>(undefined);
  
function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<ProfileByIdResponse | null>(null)
  const [profiles, setProfiles] = useState<ProfileByIdResponse[] | null>(null);

  const fetchProfile = async () => {
    const response = await profileById();

    if ('error' in response) {

      setProfile(null);
      console.error('Error al obtener perfil:', response.error);
    } else {

      setProfile(response as ProfileByIdResponse);
    }
  };

  const fetchAllProfiles = async () => {
    const result = await allProfiles();

    if ("error" in result) {
      setProfiles(null);
    } else {
      setProfiles(result);
    }
  };
  
  useEffect(() => {
    fetchProfile();
    fetchAllProfiles();
  }, []);
  console.log("Perfil:", profile)
  
  return (
    <ProfileContext.Provider value={{ profile, setProfile, fetchProfile, profiles, fetchAllProfiles }}>
      {children}
    </ProfileContext.Provider>
  );
}

function useProfileContext() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfileContext debe ser usado dentro de un ProfileProvider');
  }
  return context;
}
  
export { ProfileProvider, useProfileContext };