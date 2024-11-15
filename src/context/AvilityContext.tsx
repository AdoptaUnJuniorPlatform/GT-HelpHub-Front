import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { UserHabilitiesResponse } from "../types/AbilityServiceTypes";
import { getUserHabilities } from "../services/AbilityService";

interface AvilityContextType {
  showEditor: boolean;
  setShowEditor: Dispatch<SetStateAction<boolean>>;
  userHabilities: UserHabilitiesResponse | null;
  fetchUserHabilities: () => void;
}

const AvilityContext = createContext<AvilityContextType | undefined>(undefined);

function AvilityProvider({ children }: { children: ReactNode}) {
  const [showEditor, setShowEditor] = useState<boolean>(false);
  const [userHabilities, setUserHabilities] = useState<UserHabilitiesResponse | null>(null);

  const fetchUserHabilities = async () => {
    const response = await getUserHabilities();
    if ('habilities' in response) {
      setUserHabilities({ habilities: response.habilities });

    } else {
      console.log("Ocurrio un error")
    }
  };

  useEffect(() => {
    fetchUserHabilities();
  }, [])

  console.log("habilidades:", userHabilities)
  return (
    <AvilityContext.Provider value={{
      showEditor,
      setShowEditor,
      userHabilities,
      fetchUserHabilities
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