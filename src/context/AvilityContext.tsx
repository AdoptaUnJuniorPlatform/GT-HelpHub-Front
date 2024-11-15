import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { UserHabilitiesResponse, Hability } from "../types/AbilityServiceTypes";
import { getAllHabilities, getUserHabilities } from "../services/AbilityService";

interface AvilityContextType {
  showEditor: boolean;
  setShowEditor: Dispatch<SetStateAction<boolean>>;
  userHabilities: UserHabilitiesResponse | null;
  allHabilities: Hability[] | null;
  fetchUserHabilities: () => void;
  fetchAllHabilities: () => void;
}

const AvilityContext = createContext<AvilityContextType | undefined>(undefined);

function AvilityProvider({ children }: { children: ReactNode}) {
  const [showEditor, setShowEditor] = useState<boolean>(false);
  const [userHabilities, setUserHabilities] = useState<UserHabilitiesResponse | null>(null);
  const [allHabilities, setAllHabilities] = useState<Hability[] | null>(null);

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

  useEffect(() => {
    fetchUserHabilities();
    fetchAllHabilities();
  }, [])

  console.log("habilidades usuario:", userHabilities)
  console.log("habilidades todas:", allHabilities)
  return (
    <AvilityContext.Provider value={{
      showEditor,
      setShowEditor,
      userHabilities,
      fetchUserHabilities,
      allHabilities,
      fetchAllHabilities
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