import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { UserHabilitiesResponse, Hability, AvilityContextType } from "../types/AbilityServiceTypes";
import { deleteHability, getAllHabilities, getUserHabilities, HabilitiesByCategory } from "../services/AbilityService";
import axios from "axios";
import { useAuthContext } from "./AuthContext";

const AvilityContext = createContext<AvilityContextType | undefined>(undefined);

function AvilityProvider({ children }: { children: ReactNode}) {
  const [showEditor, setShowEditor] = useState<boolean>(false);
  const [userHabilities, setUserHabilities] = useState<UserHabilitiesResponse | null>(null);
  const [allHabilities, setAllHabilities] = useState<Hability[] | null>([]);
  const [filteredHabilities, setFilteredHabilities] = useState<Hability[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { isAuthenticated } = useAuthContext();
  const fetchUserHabilities = async () => {
    const response = await getUserHabilities();
    if ('habilities' in response) {
      setUserHabilities({ habilities: response.habilities });

    } else {
      console.log("Ocurrio un error")
    }
  };

  const fetchAllHabilities = async () => {
    try {
      const response = await getAllHabilities();
      if ('habilities' in response) {
        setAllHabilities(response.habilities);
      } else {
        console.log(response.error)
        setAllHabilities(null);
      }
    } catch (error) {
      console.error("Error al obtener todas las habilidades:", error);

      setAllHabilities(null);
    }
  };
  const fetchFilteredHabilities = async (category: string | null) => {
    if (!category) return;

    const response = await HabilitiesByCategory(category);
    if ('habilities' in response) {
      setFilteredHabilities(response.habilities);
    } else {
      console.error(response.error);
    }
  };
  const handleDeleteHability = async (id: string) => {
    try {
      console.log('Antes de eliminar:', allHabilities, filteredHabilities);
      const response = await deleteHability(id);
      console.log('Respuesta del servidor:', response);
      console.log('userHabilities:', userHabilities?.habilities);

      if (response && response.includes('was removed successfully')) {
        console.log('Habilidad eliminada exitosamente');

        if (allHabilities) {
          setAllHabilities(allHabilities.filter(hability => hability._id !== id));
        }
  
        if (filteredHabilities) {
          setFilteredHabilities(filteredHabilities.filter(hability => hability._id !== id));
        }
      } else if (response && response.includes && response.includes('Fail to remove')) {
        console.error('Error: La habilidad no existe o no se pudo eliminar');
        alert('Error: La habilidad no existe o no se pudo eliminar.');
        
      } else {
        console.log('Habilidad eliminada exitosamente');
        if (allHabilities) {
          setAllHabilities(allHabilities.filter(hability => hability._id !== id));
        }
        setFilteredHabilities(filteredHabilities.filter(hability => hability._id !== id));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error de Axios:', error.message);
      } else {
        console.error('Error desconocido:', error);
        alert('Hubo un error desconocido al intentar eliminar la habilidad.');
      }
    }   
  };

  useEffect(() => {
    if (allHabilities) {
      setUserHabilities((prevUserHabilities) => {
        if (!prevUserHabilities) {
          return { habilities: [] };
        }
        return {
          ...prevUserHabilities,
          habilities: prevUserHabilities.habilities.filter(hability =>
            allHabilities.some(allHability => allHability._id === hability._id)
          ),
        };
      });
    }
  }, [allHabilities]);

  useEffect(() => {
    if (isAuthenticated) {
      console.log('Fetching habilities...');
      fetchUserHabilities();
      fetchAllHabilities();
    } return
  }, [isAuthenticated]); 

  return (
    <AvilityContext.Provider value={{
      showEditor,
      setShowEditor,
      userHabilities,
      setUserHabilities,
      fetchUserHabilities,
      allHabilities,
      selectedCategory,
      setSelectedCategory,
      fetchAllHabilities,
      filteredHabilities,
      setFilteredHabilities,
      fetchFilteredHabilities,
      deleteHability: handleDeleteHability
    }}>
      {children}
    </AvilityContext.Provider>
  )
}

function useAvilityContext() {
  const context = useContext(AvilityContext);
  if (!context) {
    throw new Error('useAvilityContext debe ser usado dentro de un AvilityProvider');
  }
  return context;
}

export { AvilityProvider, useAvilityContext}