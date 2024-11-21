import { useChatContext } from "../context/ChatContext"
import InboxContacts from "./InboxContacts"
import InboxMenu from "./InboxMenu"

function Inbox() {
  const {openSms, openRequest, handleOpenSmsClick, handleOpenRequestClick} = useChatContext();
  return (
    <div className="flex flex-col w-11/12 h-full">
      <h1 className="text-[32px] text-neutral-black font-medium leading-6 tracking-wide pl-10 py-10">Mensajes</h1>
      <div className="flex flex-col items-center py-4 gap-1">
        <InboxMenu title="Mensajes" numSms={3} onClick={handleOpenSmsClick} openSms={openSms}/>
        <InboxMenu title="Solicitud de intercambio" numSms={2} onClick={handleOpenRequestClick} openRequest={openRequest}/>
      </div>
      <InboxContacts />
    </div>
  )
}

export default Inbox 