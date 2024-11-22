import { useChatContext } from "../context/ChatContext"
import RequestTab from "./RequestTab";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxInput from "./ChatBoxInput";

function ChatBox() {
  const {openRequestTab} = useChatContext();
  return (
    <>
      <section className="flex flex-col justify-between w-full h-full border border-black-50 rounded-lg bg-white font-roboto">
        <ChatBoxHeader />
        <div className="flex-1 overflow-auto">
          {/* Chats */}
        </div>
        {!openRequestTab && <ChatBoxInput />}
      </section>
      {openRequestTab && <RequestTab />}
    </>
  )
}

export default ChatBox