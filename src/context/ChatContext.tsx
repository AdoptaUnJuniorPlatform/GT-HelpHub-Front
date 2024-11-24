import { createContext, useContext, useState, ReactNode } from 'react';

interface ChatContextProps {
  openSms: boolean;
  openRequest: boolean;
  openRequestTab: boolean;
  handleOpenSmsClick: () => void;
  handleOpenRequestClick: () => void;
  handleOpenRequestTabClick: () => void;
  handleCloseRequestTabClick: () => void;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

function ChatProvider({ children }: { children: ReactNode }) {
  const [openSms, setOpenSms] = useState(true);
  const [openRequest, setOpenRequest] = useState(false);
  const [openRequestTab, setOpenRequestTab] = useState(false)

  const handleOpenSmsClick = () => {
    setOpenSms(true);
    setOpenRequest(false);
    setOpenRequestTab(false)
  };

  const handleOpenRequestClick = () => {
    setOpenRequest(true);
    setOpenSms(false);
  };

  const handleOpenRequestTabClick = () => {
    setOpenRequestTab(true)
  }

  const handleCloseRequestTabClick = () => {
    setOpenRequestTab(false)
  }

  return (
    <ChatContext.Provider value={{ openSms, openRequest, openRequestTab, handleOpenSmsClick, handleOpenRequestClick, handleOpenRequestTabClick, handleCloseRequestTabClick }}>
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
