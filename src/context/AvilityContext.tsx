import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface AvilityContextType {
  showEditor: boolean;
  setShowEditor: Dispatch<SetStateAction<boolean>>;
}

const AvilityContext = createContext<AvilityContextType | undefined>(undefined);

function AvilityProvider({ children }: { children: ReactNode}) {
  const [showEditor, setShowEditor] = useState<boolean>(false);
  return (
    <AvilityContext.Provider value={{
      showEditor,
      setShowEditor
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