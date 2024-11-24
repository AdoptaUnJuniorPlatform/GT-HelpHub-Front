import { useEffect, useState } from 'react';
import { useAvilityContext } from '../context/AvilityContext';
import { useProfileContext } from '../context/ProfileContext';
import { useUserContext } from '../context/UserContext';
import Title from './Title';
import Card from './Card';
import Pagination from './Pagination';
import { Hability } from '../types/AbilityServiceTypes';
import { RiUserSearchFill } from 'react-icons/ri';

function FilteredCardsContainer({selectedMode, searchTerm, postalCode}: {selectedMode: string; searchTerm: string; postalCode: string}) {
  const { allHabilities, selectedCategory } = useAvilityContext();
  const { profiles, setPostalCodeError } = useProfileContext();
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

  useEffect(() => {
    if (postalCode && filteredAbilities.length === 0) {
      setPostalCodeError(true);
    } else {
      setPostalCodeError(false);
    }
  }, [postalCode, filteredAbilities]);

  const combinedDataArray = filteredAbilities.map((ability) => {
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
  const currentCards = combinedDataArray?.slice(indexOfFirstCard, indexOfLastCard);
  
  const quantity = filteredAbilities.length
  return (
    <>
      <Title 
        className='mt-5 text-sm'
        title={quantity === 0 
          ? "" 
          : `¡Enhorabuena! Hay ${quantity === 1 ? "una habilidad que podría interesarte" : `${quantity} habilidades que podrían interesarte`}.`}
      />
      <div className="flex items-start justify-center w-full flex-wrap">
        <div className="flex items-start flex-wrap gap-8 mt-10 w-full h-[90rem] ">
          {currentCards.length > 0 ? (
            currentCards.map((profile) => (
              <Card key={profile._id} profileData={profile} />
            ))
          ) : (
            <div className='flex flex-col items-start gap-3'>
              <p className='font-roboto font-medium text-lg leading-5 tracking-wide'>Lo sentimos, no encontramos coincidencias con lo que necesitas.</p>
              <div className='flex gap-3'>
                <p className='font-roboto font-medium text-lg leading-5 tracking-wide'>¿Te gustaría probar otra búsqueda?</p>
                <RiUserSearchFill size={18}/>
              </div>
            </div>
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
    </>
  );
}

export default FilteredCardsContainer;
