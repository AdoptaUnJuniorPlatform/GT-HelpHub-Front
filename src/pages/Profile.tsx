
import SideBar from "../components/SideBar"
import UserProfile from "../components/UserProfile"
import MainLayout from "../layouts/MainLayout"


function Profile() {
  return (
    <>
      <MainLayout>
        <section className="h-full">
          <SideBar />
        </section>
        <section className="flex flex-col h-[100rem] ml-[12rem] mt-5 font-roboto not-italic">
          <UserProfile />
        </section>
      </MainLayout>
    </>
  )
}

export default Profile