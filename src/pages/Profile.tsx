
import BorderButton from "../components/BorderButton"
import MyReviews from "../components/MyReviews";
import MySkills from "../components/MySkills";
import SideBar from "../components/SideBar"
import UserProfile from "../components/UserProfile"
import useBorderButton from "../hooks/useBorderButton";
import MainLayout from "../layouts/MainLayout"


function Profile() {
  const { 
    selectedBorderButton, 
    handleBorderButtonClick,
    SelectedComponent 
  } = useBorderButton("HABILIDADES", ["HABILIDADES", "VALORACIONES"], 
    { HABILIDADES: MySkills, VALORACIONES: MyReviews}
  );
  return (
    <>
      <MainLayout>
        <section className="h-full">
          <SideBar />
        </section>
        <section className="flex flex-col min-h-[100rem] ml-[12rem] mt-5 mb-20 font-roboto not-italic">
          <UserProfile />
          <div className="flex mt-10">
            <BorderButton 
              label="HABILIDADES"
              variant="profile"
              className="w-[8.5em] h-[3.3em] rounded-l-md"
              active={selectedBorderButton === "HABILIDADES"}
              onClick={() => handleBorderButtonClick("HABILIDADES")}
            />
            <BorderButton 
              label="VALORACIONES"
              variant="profile"
              className="w-[8.5em] h-[3.3em] rounded-r-md"
              active={selectedBorderButton === "VALORACIONES"}
              onClick={() => handleBorderButtonClick("VALORACIONES")}
            />
          </div>
          {SelectedComponent && <SelectedComponent />}
        </section>
      </MainLayout>
    </>
  )
}

export default Profile