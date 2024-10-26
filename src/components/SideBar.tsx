import { useState } from "react";
import { MdOutlineHouse, MdOutlineMarkEmailUnread } from "react-icons/md";
import { Menu } from "../types/types";
import Logo from "./Logo";
import { VscBellDot } from "react-icons/vsc";
import { RxExit } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import Notifications from "./Notifications";
import { mockNotifications } from "../Variables/varibles";


function SideBar() {
  const [open, setOpen] = useState<boolean>(false);
  const [showNotifications, setShowNotifications] = useState<boolean>(false);

  const sideBarMenu: Menu[] = [
    {
      name: 'Inicio',
      link: 'inicio',
      position: 'top',
      icon: <MdOutlineHouse />,
    },
    {
      name: 'Notificación',
      link: 'notificacion',
      position: 'top',
      icon: <VscBellDot />,
    },
    {
      name: 'Mensajes',
      link: 'mensajes',
      position: 'top',
      icon: <MdOutlineMarkEmailUnread />,
    },
    {
      name: 'Mi perfil',
      link: 'perfil',
      position: 'bottom',
      icon: <CgProfile />,
    },
    {
      name: 'Cerrar sesión',
      link: '/',
      position: 'bottom',
      icon: <RxExit />,
    },
  ];

  const handleNotificationClick = () => {
    if (open && showNotifications) {

      setOpen(false);
      setShowNotifications(false);
    } else {

      setOpen(true);
      setShowNotifications(true);
    }
  };

  const handleMenuClick = () => {
    setShowNotifications(false);
    setOpen(!open);
  };

  const closeSidebarAndNotifications = () => {
    setOpen(false);
    setShowNotifications(false);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-all duration-700 backdrop-blur-[2px] z-10 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeSidebarAndNotifications}
      ></div>

      <nav
        className={`h-[95.1rem] rounded-xl duration-1000 transition-all ease-in-out absolute z-20 ${
          open ? 'w-56 top-0 duration-1000' : 'w-20'
        } group`}
      >
        <section
          className={`h-[6.375rem] flex flex-col justify-center items-center bg-white rounded-t-xl transition-all duration-700 ${
            open ? 'flex w-full translate-x-0' : 'hidden -translate-x-full'
          }`}
        >
          <Logo
            className={`transition-all delay-700 ease-in-out transform ${
              open ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}
          />
        </section>

        <section className="flex-col bg-indigo-400 h-full rounded-b-xl w-full flex justify-between items-center">
          <ul className="flex flex-col items-center w-[80%] mb-5">
            {sideBarMenu
              .filter((menu) => menu.position === 'top')
              .map((menu, index) => (
                <li
                  key={index}
                  className={`flex p-3 w-full mt-4 h-16 rounded-lg my-1 cursor-pointer duration-700 items-center ${
                    menu.name === 'Notificación' && showNotifications
                      ? 'bg-white text-indigo-400'
                      : 'text-white hover:bg-white hover:text-indigo-400 hover:-translate-y-1 hover:scale-100'
                  }`}
                  onClick={() => {
                    if (menu.name === 'Notificación') {
                      handleNotificationClick();
                    } else {
                      handleMenuClick();
                    }
                  }}
                >
                  <p className="text-3xl ml-[6px]">{menu.icon}</p>
                  <p
                    className={`text-base font-semibold ml-3 origin-left duration-1000 ${
                      !open ? 'scale-0' : 'scale-100'
                    }` }
                  >
                    {menu.name}
                  </p>
                </li>
              ))}
          </ul>

          <ul className="flex flex-col items-center w-[80%] mb-5">
            {sideBarMenu
              .filter((menu) => menu.position === 'bottom')
              .map((menu, index) => (
                <li
                  key={index}
                  className="text-white flex p-3 w-full mt-4 h-16 rounded-lg my-1 cursor-pointer hover:-translate-y-1 hover:scale-100 duration-700 hover:bg-white hover:text-indigo-400 items-center"
                  onClick={handleMenuClick}
                >
                  <p className="text-3xl ml-[6px]">{menu.icon}</p>
                  <p
                    className={`text-base font-semibold ml-3 origin-left duration-1000 ${
                      !open ? 'scale-0' : 'scale-100'
                    }`}
                  >
                    {menu.name}
                  </p>
                </li>
              ))}
          </ul>
        </section>

        {showNotifications && (
          <div className="absolute top-[12.5rem] left-[110%] z-30">
            <Notifications notifications={mockNotifications} />
          </div>
        )}

      </nav>
    </>
  );
}

export default SideBar;