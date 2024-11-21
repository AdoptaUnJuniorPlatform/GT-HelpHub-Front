import ChatBox from "../components/ChatBox";
import Inbox from "../components/Inbox";
import SideBar from "../components/SideBar";
import MainLayout from "../layouts/MainLayout";

function Messages() {

  return (
    <MainLayout>
      <section className="flex w-full min-h-[100rem] gap-2">
        <SideBar/>
        <div className="flex flex-col items-center w-3/12 h-[100rem] ml-[7rem] mt-5 mb-20 font-roboto not-italic">
          <Inbox/>
        </div>
        <div className="flex w-8/12 border border-black-50 my-[6rem]">
          <ChatBox />
        </div>
      </section>
    </MainLayout>
  )
}

export default Messages