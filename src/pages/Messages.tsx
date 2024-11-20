import Inbox from "../components/Inbox";
import SideBar from "../components/SideBar";
import MainLayout from "../layouts/MainLayout";

function Messages() {
  return (
    <MainLayout>
      <section className="w-full min-h-[100rem]">
        <SideBar/>
        <div className="flex flex-col h-[100rem] ml-[9rem] mt-5 mb-20 font-roboto not-italic">
          <Inbox/>
        </div>
      </section>
    </MainLayout>
  )
}

export default Messages