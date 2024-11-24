import { useState, useEffect } from "react";
import { fetchProfileImage } from "../services/apiClient";

export const useProfileImages = (userIds: string[]) => {
  const [profilePictures, setProfilePictures] = useState<Record<string, string>>({});

  useEffect(() => {
    const loadProfilePictures = async () => {
      const pictureMap: Record<string, string> = {};

      try {
        await Promise.all(
          userIds.map(async (userId) => {
            const imageUrl = await fetchProfileImage(userId);

            if (imageUrl) {
              pictureMap[userId] = imageUrl;
            }
          })
        );
        setProfilePictures(pictureMap);
      } catch (err) {
        console.error("Error loading profile pictures:", err);
      }
    };
  
    if (userIds.length > 0) {
      loadProfilePictures();
    }
  }, [userIds]);
  
  return profilePictures;
};
