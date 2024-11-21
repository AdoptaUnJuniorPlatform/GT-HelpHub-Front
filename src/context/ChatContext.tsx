import { createContext, useContext, useState, ReactNode } from 'react';

interface ChatContextProps {
  openSms: boolean;
  openRequest: boolean;
  handleOpenSmsClick: () => void;
  handleOpenRequestClick: () => void;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

function ChatProvider({ children }: { children: ReactNode }) {
  const [openSms, setOpenSms] = useState(true);
  const [openRequest, setOpenRequest] = useState(false);

  const handleOpenSmsClick = () => {
    setOpenSms(true);
    setOpenRequest(false);
  };

  const handleOpenRequestClick = () => {
    setOpenRequest(true);
    setOpenSms(false);
  };

  return (
    <ChatContext.Provider value={{ openSms, openRequest, handleOpenSmsClick, handleOpenRequestClick }}>
      {children}
    </ChatContext.Provider>
  );
};

const useChatContext = (): ChatContextProps => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};

export { ChatProvider, useChatContext };
