import { useChatContext } from "../context/ChatContext"
import RequestTab from "./RequestTab";
import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxInput from "./ChatBoxInput";
import { useState } from "react";
import ChatMessage from "./ChatMessage";

type Message = {
  id: number;
  content: string;
  sender: "user" | "other";
};

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
      <section className="flex flex-col justify-between w-full h-full border border-black-50 rounded-xl bg-white font-roboto">
        <ChatBoxHeader />
        <div className="flex flex-col justify-end flex-1  overflow-auto px-10 py-5">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              content={message.content}
              sender={message.sender}
            />
          ))}
        </div>
        {!openRequestTab && <ChatBoxInput onSendMessage={addMessage}/>}
      </section>
      {openRequestTab && <RequestTab />}
    </>
  )
}

export default ChatBox