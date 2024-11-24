import { IoFileTrayOutline } from "react-icons/io5";

function ChatBoxEmpty() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="mb-4 text-[#5F5F5F]">
        <IoFileTrayOutline size={154}/>
      </div>
      <h1 className="text-2xl font-normal text-neutral-black leading-normal">Bandeja de entrada</h1>
      <p className="text-base text-black-50 text-center mt-2 leading-normal tracking-wide">
        Aún no iniciaste ninguna conversación, <br />
        pero cuando lo hagas, las encontrarás aquí.
      </p>
    </div>
  );
}

export default ChatBoxEmpty;
