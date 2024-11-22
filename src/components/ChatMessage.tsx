import ProfileImg from "./ProfileImg";

type ChatMessageProps = {
  content: string;
  sender: "user" | "other";
};

function ChatMessage({ content, sender }: ChatMessageProps) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } my-4`}
    >

      <div
        className={`flex flex-col max-w-[70%] gap-2 ${
          isUser ? "items-end order-2 ml-4" : "items-start order-1 mr-4"
        }`}
      >
        <div
          className={`font-roboto font-normal text-xl text-black-80 py-4 px-5 leading-6 tracking-wide ${
            isUser ? "bg-neutral-gray" : "bg-violeta-20"
          }`}
        >
          {content}
        </div>

        <ProfileImg
          className="w-[73px] h-[73px] rounded-full overflow-hidden"
          src={`${isUser
            ? "https://i.pinimg.com/736x/d2/54/d9/d254d9cfca7c55d54020c02ed217c995.jpg"
            : "https://i.pinimg.com/736x/7c/01/da/7c01da1f0562de36833d35d5530187a8.jpg"
          }`}
        />
      </div>

    </div>
  );
}

export default ChatMessage;

