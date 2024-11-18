import AverageStars from "../components/AverageStars";
import BorderButton from "../components/BorderButton"
import MyReviews from "../components/MyReviews";
import MySkills from "../components/MySkills";
import Ratings from "../components/Ratings";
import SideBar from "../components/SideBar"
import UserProfile from "../components/UserProfile"
import useBorderButton from "../hooks/useBorderButton";
import MainLayout from "../layouts/MainLayout"
import { Link, Outlet } from "react-router-dom";
import { useAvilityContext } from "../context/AvilityContext";
import { profileById } from "../services/ProfileService";
import { userById } from "../services/UserService";
import { ProfileByIdResponse } from "../types/ProfileServiceTypes"
import { UserByIdResponse } from "../types/UserServiceTypes";
import { useEffect, useState } from "react";

function Profile() {
  const [profile, setProfile] = useState<ProfileByIdResponse | null>(null);
  const [user, setUser] = useState<UserByIdResponse | null>(null);

  const { 
    selectedBorderButton, 
    handleBorderButtonClick,
  } = useBorderButton("HABILIDADES", ["HABILIDADES", "VALORACIONES"], 
    { HABILIDADES: MySkills, VALORACIONES: MyReviews}
  );
  const { showEditor } = useAvilityContext();
  console.log(showEditor)

  useEffect(() => {
    const fetchProfileAndUser = async () => {
      try {
        const [profileData, userData] = await Promise.all([profileById(), userById()]);
  
        if ("error" in profileData) {
          console.error("Error al obtener el perfil:", profileData.error);
          return;
        }
  
        if ("error" in userData) {
          console.error("Error al obtener el usuario:", userData.error);
          return;
        }
  
        setProfile(profileData);
        setUser(userData);
      } catch (err) {
        console.error("Error en las solicitudes:", err);
      }
    };
  
    fetchProfileAndUser();
  }, []);
  
  // Verificar que tanto `profile` como `user` no sean null antes de combinarlos
  if (!profile || !user) return <div>Cargando perfil...</div>;
  
  // Combinar datos de perfil y usuario
  const combinedProfile = {
    ...profile,
    nameUser: user?.nameUser || "", 
    surnameUser: user?.surnameUser || "",
  };

  return (
    <>
      <MainLayout>
        <section className="h-full">
          <SideBar />
        </section>
        <section className="flex flex-col min-h-[100rem] ml-[12rem] mt-5 mb-20 font-roboto not-italic">
          {profile && <UserProfile profile={combinedProfile} />}
          <div className="flex mt-10">
            {showEditor && <Outlet />}
          </div>
          {!showEditor && (
            <>
              <div className="flex mt-10">
                <Link to={'/profile/habilidades'}>
                  <BorderButton 
                    label="HABILIDADES"
                    variant="profile"
                    className="w-[8.5em] h-[3.3em] rounded-l-md"
                    active={selectedBorderButton === "HABILIDADES"}
                    onClick={() => handleBorderButtonClick("HABILIDADES")}
                  />
                </Link>
                <Link to={'/profile/valoraciones'}>
                  <BorderButton 
                    label="VALORACIONES"
                    variant="profile"
                    className="w-[8.5em] h-[3.3em] rounded-r-md"
                    active={selectedBorderButton === "VALORACIONES"}
                    onClick={() => handleBorderButtonClick("VALORACIONES")}
                  />
                </Link>
              </div>
              <Outlet />

              {selectedBorderButton === "VALORACIONES" && (
                <section className=" absolute flex flex-col right-[15.5rem] top-[30.5rem] mt-5">
                  <h1 className="text-3xl text-neutral-black leading-6 tracking-wide font-medium mb-7">Valoraciones</h1>
                  <div className="flex gap-3">
                    <AverageStars />
                    <Ratings reviews={profile.reviews.length} />
                  </div>
                </section>
              )}
            </>
          )}
        </section>
      </MainLayout>
    </>
  )
}

export default Profile

