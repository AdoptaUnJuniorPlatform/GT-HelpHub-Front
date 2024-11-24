import { useState, useEffect, useCallback } from "react";
import { fetchProfileImage } from "../services/apiClient";

export const useProfileImage = (userId: string | null, disableLoad: boolean = false) => {
  const [profilePicture, setProfilePicture] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const loadProfilePicture = useCallback(async () => {
    if (!userId || disableLoad) {
      setProfilePicture(""); 
      setError(null);
      return;
    }

    try {
      const imageUrl = await fetchProfileImage(userId);
      setProfilePicture(imageUrl || ""); 
      setError(null);
    } catch (err) {
      setError("Error al cargar la imagen de perfil.");
      console.error("Error loading profile picture:", err);
    }
  }, [userId, disableLoad]); 

  useEffect(() => {
    loadProfilePicture();
  }, [loadProfilePicture]); 

  return { profilePicture, error };
};
