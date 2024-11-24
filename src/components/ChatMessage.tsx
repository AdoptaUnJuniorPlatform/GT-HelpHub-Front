type ChatMessageProps = {
  content: string;
  sender: "user" | "other";
};

function ChatMessage({ content, sender }: ChatMessageProps) {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} my-2`}>
      <div
        className={`font-roboto font-normal text-xl text-black-80 py-4 max-w-[60%] leading-6 tracking-wide ${
          isUser ? "bg-neutral-gray pl-8 pr-5" : "bg-violeta-20 pl-5 pr-8"
        }`}
      >
        {content}
      </div>
    </div>
  );
}

export default ChatMessage;

