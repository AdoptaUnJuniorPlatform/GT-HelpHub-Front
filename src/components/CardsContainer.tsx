import { categories } from "../Variables/varibles";
import Card from "./Card";
import Title from "./Title";
import { useAvilityContext } from "../context/AvilityContext";
import { useProfileContext } from "../context/ProfileContext";
import { useUserContext } from "../context/UserContext";
import Pagination from "./Pagination";
import { useState } from "react";

const CardsContainer = () => {
  const { allHabilities } = useAvilityContext();
  const { profiles } = useProfileContext();
  const { users } = useUserContext();

  const [currentPage, setCurrentPage] = useState(1);
  const cardsToShow = 3;
  const categoriesPerPage = 2;
  const totalCategories = categories.length;

  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(indexOfFirstCategory, indexOfLastCategory);

  const profilesMap = new Map(profiles?.map((profile) => [profile.userId._id, profile])); 
  const usersMap = new Map(users?.map((user) => [user._id, user]));
  
  const combinedDataArray =
    allHabilities?.map((ability) => {
      const userProfile = profilesMap.get(ability.user_id);
      const userData = usersMap.get(ability.user_id);

      return {
        ...ability,
        location: userProfile?.location ?? "Ubicación no disponible",
        availability: userProfile?.preferredTimeRange ?? "Disponible",
        userFullName: `${userData?.nameUser ?? "Nombre no disponible"} ${userData?.surnameUser ?? "Apellido no disponible"}`,
        profilePicture: userProfile?.profilePicture ?? "default-photo.jpg",
      };
    }) ?? [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full h-[90rem]">
      {currentCategories.map((category) => {
        const categoryProfiles = combinedDataArray.filter((profile) =>
          profile.category.includes(category)
        );
        const currentProfiles = categoryProfiles.slice(0, cardsToShow);

        return (
          <div key={category} className="mt-11 w-full h-[35rem]">
            <Title title={category} />
            <div className="flex flex-wrap gap-8 mt-10 w-full">
              {currentProfiles?.slice(0, cardsToShow).map((profile) => (
                <Card key={profile._id + category} profileData={profile} />
              ))}
            </div>
          </div>
        );
      })}
      <div className="flex justify-center items-center pt-24 pb-20 w-full">
        <Pagination 
          totalItems={totalCategories}
          itemsPerPage={categoriesPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}  
        />
      </div>
    </div>
  );
};

export default CardsContainer;

  
  