import { useState, useEffect } from "react";
import { fetchProfileImage } from "../services/apiClient";

export const useProfileImage = (userId: string | null) => {
  const [profilePicture, setProfilePicture] = useState<string>("");

  useEffect(() => {
    const loadProfilePicture = async () => {
      if (!userId) {
        console.warn("User ID is not provided.");
        return;
      }

      try {
        const imageUrl = await fetchProfileImage(userId);
        if (imageUrl) {
          setProfilePicture(imageUrl);
        } else {
          console.warn("No profile picture found for the user.");
        }
      } catch (err) {
        console.error("Error loading profile picture:", err);
      }
    };

    loadProfilePicture();
  }, [userId]);

  return { profilePicture };
};
