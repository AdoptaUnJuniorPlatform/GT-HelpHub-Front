import { useChatContext } from "../context/ChatContext"
import RequestTab from "./RequestTab";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxInput from "./ChatBoxInput";

function ChatBox() {
  const {openRequestTab} = useChatContext();
  return (
    <section className="flex flex-col justify-between w-full h-full border border-black-50 rounded-lg bg-white font-roboto">
      <ChatBoxHeader />
      <div>
        {/* Chats */}
      </div>
      {!openRequestTab && <ChatBoxInput />}
      
      {openRequestTab && <RequestTab />}
    </section>
  )
}

export default ChatBox