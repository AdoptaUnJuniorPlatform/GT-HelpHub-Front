import { useState, useEffect } from "react";
import { fetchProfileImage } from "../services/apiClient";

export const useProfileImages = (userIds: string[]) => {
  const [profilePictures, setProfilePictures] = useState<Record<string, string>>({});
  const [processedUserIds, setProcessedUserIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    let isMounted = true;

    const loadProfilePictures = async () => {
      const pictureMap: Record<string, string> = {};

      const validUserIds = userIds.filter((id) => !processedUserIds.has(id));

      if (validUserIds.length === 0) return; 

      try {
        await Promise.all(
          validUserIds.map(async (userId) => {
            try {
              const imageUrl = await fetchProfileImage(userId);
              if (imageUrl) {
                pictureMap[userId] = imageUrl;
              } 
            } catch (err) {
              console.error(`Error cargando imagen para el usuario ${userId}:`, err);
            }
          })
        );

        if (isMounted) {
          setProfilePictures((prev) => ({ ...prev, ...pictureMap }));
          setProcessedUserIds((prev) => new Set([...prev, ...validUserIds]));
        }
      } catch (err) {
        console.error("Error general cargando imágenes:", err);
      }
    };

    loadProfilePictures();

    return () => {
      isMounted = false;
    };
  }, [userIds, processedUserIds]);

  return profilePictures;
};
