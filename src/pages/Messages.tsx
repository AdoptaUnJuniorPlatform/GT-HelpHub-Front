import ChatBox from "../components/ChatBox";
import Inbox from "../components/Inbox";
import SideBar from "../components/SideBar";
import { useChatContext } from "../context/ChatContext";
import MainLayout from "../layouts/MainLayout";

function Messages() {
  const {openRequestTab} = useChatContext();
  return (
    <MainLayout>
      <section className={`flex w-full gap-2 ${openRequestTab ? "h-full" : "h-[90rem] "}`}>
        <SideBar/>
        <div className="flex flex-col items-center w-3/12 h-[80rem] ml-[7rem] mt-5 mb-20 font-roboto not-italic">
          <Inbox/>
        </div>
        <div className={`flex w-9/12 border border-black-50  ${openRequestTab? "my-0" : "my-[6rem]"}`}>
          <ChatBox />
        </div>
      </section>
    </MainLayout>
  )
}

export default Messages