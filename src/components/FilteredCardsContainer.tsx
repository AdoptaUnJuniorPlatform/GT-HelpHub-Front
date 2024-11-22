import { useState } from 'react';
import { useAvilityContext } from '../context/AvilityContext';
import { useProfileContext } from '../context/ProfileContext';
import { useUserContext } from '../context/UserContext';
import Title from './Title';
import Card from './Card';
import Pagination from './Pagination';
import { Hability } from '../types/AbilityServiceTypes';
import { useProfileImages } from '../hooks/useProfileImages';

function FilteredCardsContainer({selectedMode, searchTerm, postalCode}: {selectedMode: string; searchTerm: string; postalCode: string}) {
  const { allHabilities, selectedCategory } = useAvilityContext();
  const { profiles } = useProfileContext();
  const { users } = useUserContext();
  
  const [currentPage, setCurrentPage] = useState(1);
  const cardsToShow = 3;
  
  const profilesMap = new Map(profiles?.map((profile) => [profile.userId._id, profile]));
  const usersMap = new Map(users?.map((user) => [user._id, user]));

  const filteredAbilities: Hability[] = allHabilities?.filter((ability) => {
    const matchesMode = selectedMode === "TODOS" || ability.mode === selectedMode;
    const matchesCategory = !selectedCategory || ability.category.includes(selectedCategory);
    const matchesSearchTerm = ability.title.toLowerCase().includes(searchTerm.toLowerCase());
    const userProfile = profilesMap.get(ability.user_id);
    const userLocation = userProfile?.location || "";
    const isOnlineMode = ability.mode === "Online";
    const matchesLocation = postalCode 
      ? (isOnlineMode ? false : userLocation.includes(postalCode.toLowerCase())) 
      : true;
    return matchesMode && matchesCategory && matchesSearchTerm && matchesLocation;
  }) ?? [];

  const userIds = Array.from(new Set(filteredAbilities.map((id) => id?.user_id).filter((id): id is string => !!id))); 
  const profilePictures = useProfileImages(userIds);

  const combinedDataArray = filteredAbilities.map((ability) => {
    const userProfile = profilesMap.get(ability.user_id);
    const userData = usersMap.get(ability.user_id);
  
    return {
      ...ability,
      location: userProfile?.location ?? "Ubicación no disponible",
      availability: userProfile?.preferredTimeRange ?? "Disponible",
      userFullName: `${userData?.nameUser ?? "Nombre no disponible"} ${userData?.surnameUser ?? "Apellido no disponible"}`,
      profilePicture: profilePictures[ability.user_id] ?? "default-photo.jpg",
    };
  });
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastCard = currentPage * cardsToShow;
  const indexOfFirstCard = indexOfLastCard - cardsToShow;
  const currentCards = combinedDataArray?.slice(indexOfFirstCard, indexOfLastCard);
  
  return (
    <div className="w-full h-[90rem] mt-10">
      <Title title="Habilidades Filtradas" />
      <div className="flex flex-wrap gap-8 mt-10 w-full">
        {currentCards.length > 0 ? (
          currentCards.map((profile) => (
            <Card key={profile._id} profileData={profile} />
          ))
        ) : (
          <p>No hay habilidades que coincidan con la categoría seleccionada.</p>
        )}
      </div>
      <div className="flex justify-center items-center pt-12 pb-20">
        {combinedDataArray.length > cardsToShow && (
          <Pagination 
            totalItems={combinedDataArray.length} 
            itemsPerPage={cardsToShow} 
            currentPage={currentPage} 
            onPageChange={handlePageChange} 
          />
        )}
      </div>
    </div>
  );
}

export default FilteredCardsContainer;
