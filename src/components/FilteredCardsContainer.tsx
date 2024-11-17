import { useState } from 'react';
import { useAvilityContext } from '../context/AvilityContext';
import { useProfileContext } from '../context/ProfileContext';
import { useUserContext } from '../context/UserContext';
import Title from './Title';
import Card from './Card';
import Pagination from './Pagination';

function FilteredCardsContainer({selectedMode}: {selectedMode: string}) {
  const { allHabilities, selectedCategory } = useAvilityContext();
  const { profiles } = useProfileContext();
  const { users } = useUserContext();
  
  const [currentPage, setCurrentPage] = useState(1);
  const cardsToShow = 3;
  
  const profilesMap = new Map(profiles?.map((profile) => [profile.userId._id, profile]));
  const usersMap = new Map(users?.map((user) => [user._id, user]));
  

  const filteredByCategory = allHabilities?.filter((ability) => {
    return selectedCategory ? ability.category.includes(selectedCategory) : true;
  }) ?? [];
  
  const filteredByMode = filteredByCategory.filter((ability) => {
    if (selectedMode === "TODOS") return true;
    return ability.mode === selectedMode;
  });

  const combinedDataArray = filteredByMode.map((ability) => {
    const userProfile = profilesMap.get(ability.user_id);
    const userData = usersMap.get(ability.user_id);
  
    return {
      ...ability,
      location: userProfile?.location ?? "Ubicación no disponible",
      availability: userProfile?.preferredTimeRange ?? "Disponible",
      userFullName: `${userData?.nameUser ?? "Nombre no disponible"} ${userData?.surnameUser ?? "Apellido no disponible"}`,
      profilePicture: userProfile?.profilePicture ?? "default-photo.jpg",
    };
  });
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastCard = currentPage * cardsToShow;
  const indexOfFirstCard = indexOfLastCard - cardsToShow;
  const currentCards = combinedDataArray.slice(indexOfFirstCard, indexOfLastCard);
  
  return (
    <div className="w-full">
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
