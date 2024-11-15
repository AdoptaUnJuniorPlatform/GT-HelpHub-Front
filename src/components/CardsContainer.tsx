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
  const { profile } = useProfileContext();
  const { user } = useUserContext();

  const [currentPage, setCurrentPage] = useState(1);
  const cardsToShow = 3;

  const categoriesPerPage = 2;
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(indexOfFirstCategory, indexOfLastCategory);
  
  const combinedDataArray = allHabilities?.map((ability) => ({
    ...ability,
    location: profile?.location ?? "Ubicación no disponible",
    availability: profile?.preferredTimeRange ?? "Disponible",
    userFullName: `${user?.nameUser ?? "Nombre no disponible"} ${user?.surnameUser ?? "Apellido no disponible"}`,
    profilePicture: profile?.profilePicture ?? "",
  })) ?? [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  console.log("Combined Data Array:", combinedDataArray);

  return (
    <div className="w-full">
      {currentCategories.map((category) => {
        const categoryProfiles = combinedDataArray.filter((profile) =>
          profile.category.includes(category)
        );

        console.log(`Profiles in category "${category}":`, categoryProfiles);

        return (
          <div key={category} className="mt-11 w-full">
            <Title title={category} />
            <div className="flex flex-wrap gap-8 mt-10 w-full">
              {categoryProfiles?.slice(0, cardsToShow).map((profile) => (
                <Card key={profile._id + category} profileData={profile} />
              ))}
            </div>
          </div>
        );
      })}
      <div className="flex justify-center items-center pt-12 pb-20">
        <Pagination onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default CardsContainer;

  
  