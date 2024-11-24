import { useState } from "react";
import PrimaryButton from "./PrimaryButton"

type ChatBoxInputProps = {
  onSendMessage: (content: string, sender: "user" | "other") => void;
};

function ChatBoxInput({ onSendMessage }: ChatBoxInputProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleSend = () => {
    if (inputValue.trim() === "") return;

    onSendMessage(inputValue, "user");
    setInputValue("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-center justify-between border-t-[1px] border-black-50 w-full h-fit py-5 px-10 gap-2">
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Escribe un mensaje..."
        className="w-10/12 h-[2.5rem] flex-1 border-none focus:outline-none placeholder-gray-400 placeholder:text-2xl mt-5 scrollbar-hide"
      />
      <div className="min-w-2/12">
        <PrimaryButton 
          className="h-10 bg-celeste-100 hover:bg-[#3259e8]"
          label="Enviar mensaje"
          onClick={handleSend}
        />
      </div>
    </div>
  )
}

export default ChatBoxInput