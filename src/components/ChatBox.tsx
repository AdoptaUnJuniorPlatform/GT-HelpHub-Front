import { useChatContext } from "../context/ChatContext"
import RequestTab from "./RequestTab";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxInput from "./ChatBoxInput";
import { useState } from "react";
import ChatMessage from "./ChatMessage";
import ProfileImg from "./ProfileImg";
import { Message } from "../types/types";
import ChatBoxEmpty from "./ChatBoxEmpty";
import { userContacts } from "../Variables/varibles";

function ChatBox() {
  const {openRequestTab} = useChatContext();

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, content: "Sí! Me ha salido todo muy bien!", sender: "other" },
    { id: 2, content: "Qué bueno que te pude ayudar!", sender: "user" },
    { id: 3, content: "Me alegra mucho!", sender: "user" },
  ]);

  const addMessage = (content: string, sender: "user" | "other") => {
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, content, sender },
    ]);
  };

  return (
    <>
      <section className={`flex flex-col justify-between w-full h-full border-black-50  bg-white font-roboto ${openRequestTab? "rounded-none border-x-[1px]" : "rounded-xl border"}`}>
        <ChatBoxHeader />
        <div className="flex flex-col justify-end flex-1  overflow-auto px-10 py-5">
          {userContacts.length === 0 && !openRequestTab ? (
            <ChatBoxEmpty />
          ) : (
            !openRequestTab && 
            messages.map((message, index) => {
              const isLastInBlock =
                index === messages.length - 1 ||
                messages[index + 1].sender !== message.sender;
  
              return (
                <div key={message.id}>
                  <ChatMessage
                    content={message.content}
                    sender={message.sender}
                  />
  
                  {isLastInBlock && (
                    <ProfileImg
                      className={`w-[73px] h-[73px] rounded-full overflow-hidden mt-2 ${
                        message.sender === "user" ? "ml-auto" : "mr-auto"
                      }`}
                      src={`${
                        message.sender === "user"
                          ? "https://i.pinimg.com/736x/d2/54/d9/d254d9cfca7c55d54020c02ed217c995.jpg"
                          : "https://i.pinimg.com/736x/7c/01/da/7c01da1f0562de36833d35d5530187a8.jpg"
                      }`}
                    />
                  )}
                </div>
              );
            }
            )

          )}
        </div>
        {!openRequestTab && <ChatBoxInput onSendMessage={addMessage}/>}
      </section>
      {openRequestTab && <RequestTab />}
    </>
  )
}

export default ChatBox