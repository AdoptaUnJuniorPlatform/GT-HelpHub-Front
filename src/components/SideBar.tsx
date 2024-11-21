import { useState } from "react";
import { MdOutlineHouse, MdOutlineMarkEmailUnread } from "react-icons/md";
import { Menu } from "../types/types";
import Logo from "./Logo";
import { VscBellDot } from "react-icons/vsc";
import { RxExit } from "react-icons/rx";
import Notifications from "./Notifications";
import { mockNotifications, profiles } from "../Variables/varibles";
import ProfileImg from "./ProfileImg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useChatContext } from "../context/ChatContext";


function SideBar() {
  const [open, setOpen] = useState<boolean>(false);
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const {openRequestTab} = useChatContext();
  const location = useLocation();
  const isHome = location.pathname === '/home';
  const { handleLogout } = useAuthContext();
  const navigate = useNavigate();

  const sideBarMenu: Menu[] = [
    {
      name: 'Inicio',
      link: '/home',
      position: 'top',
      icon: <MdOutlineHouse />,
    },
    {
      name: 'Notificación',
      link: '#',
      position: 'top',
      icon: <VscBellDot />,
    },
    {
      name: 'Mensajes',
      link: '/mensajes',
      position: 'top',
      icon: <MdOutlineMarkEmailUnread />,
    },
    {
      name: 'Mi perfil',
      link: '/profile',
      position: 'bottom',
      icon: <ProfileImg 
        src={profiles[0].photo} 
        className="w-[3.25rem] h-[3.25rem] rounded-lg overflow-hidden shadow-[4px_4px_4px_0_rgba(0,0,0,0.25)]" 
      />,
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
        className={`flex flex-col h-[90%] rounded-xl duration-1000 transition-all ease-in-out absolute mt-7 z-20 ${openRequestTab? "h-[135%]" : "h-[90%]"} ${

          open ? 'w-56 top-0 duration-1000' : 'w-24'
        } group`}
      >
        <section
          className={`h-[6.5rem] flex justify-center items-center bg-white rounded-t-xl transition-all duration-700 ${
            open || !open && !isHome ? 'flex w-full translate-x-0' : 'hidden -translate-x-full'
          }`}
        >
          <Logo
            showInitial={!open}
            className={`w-full h-full transition-all delay-700 ease-in-out transform ${
              open ? 'scale-100 opacity-100' : 'scale-50 opacity-100'
            }`}
          />
        </section>

        <section className="flex-col bg-violeta-100 h-full rounded-b-xl w-full flex justify-between items-center">
          <ul className="flex flex-col items-center w-[80%] mt-7">
            {sideBarMenu
              .filter((menu) => menu.position === 'top')
              .map((menu, index) => (
                <Link 
                  key={index}
                  to={menu.link}
                  className={`flex w-full pl-[10px] h-16 rounded-lg my-3 cursor-pointer duration-700 items-center ${
                    menu.name === 'Notificación' && showNotifications
                      ? 'bg-white text-violeta-100'
                      : 'text-white hover:bg-white hover:text-violeta-100 hover:-translate-y-1 hover:scale-100'
                  }`}
                >
                  <li
                    className="flex items-center"
                    onClick={() => {
                      if (menu.name === 'Notificación') {
                        handleNotificationClick();
                      } else {
                        handleMenuClick();
                      }
                    }}
                  >
                    <p className="relative text-3xl ml-[12px]">{menu.icon}
                      {menu.name === 'Notificación' && mockNotifications.length > 0 && (
                        <span className="absolute top-[0.12rem] right-[0.12rem] w-[11.5px] h-[11.5px] bg-red-500 rounded-full"></span>
                      )}
                    </p>
                    <p
                      className={`text-base font-semibold ml-3 origin-left duration-1000 ${
                        !open ? 'scale-0' : 'scale-100'
                      }` }
                    >
                      {menu.name}
                    </p>
                  </li>
                </Link>
              ))}
          </ul>

          <ul className="flex flex-col items-center w-[80%] mb-5">
            {sideBarMenu
              .filter((menu) => menu.position === 'bottom')
              .map((menu, index) => (
                <Link 
                  to={menu.link}
                  key={index}
                  className={`text-white mt-3 flex w-full h-16 rounded-lg my-3 cursor-pointer hover:scale-100 items-center 
                    ${open &&  menu.name === 'Mi perfil' 
                  ? 'hover:bg-white hover:text-violeta-100 hover:-translate-y-1 duration-700' 
                  : 'hover:-translate-y-1 duration-700 '}
                    ${menu.name !== 'Mi perfil' ? 'hover:bg-white hover:text-violeta-100' : ''}
                  `}
                >
                  <li
                    onClick={() => {
                      if (menu.name === 'Cerrar sesión') {
                        handleLogout();
                        navigate('/')
                      } else {
                        handleMenuClick();
                      }
                    }}
                    className="flex items-center"
                  >
                    <figure className={`text-3xl
                  ${menu.name === 'Mi perfil' 
                  ? 'p-2 ml-[3px] ' 
                  :  'ml-[14px] p-2'}`} 
                    >
                      {menu.icon}
                    </figure>
                    <p
                      className={`text-base font-semibold ml-2 origin-left duration-1000 ${
                        !open ? 'scale-0' : 'scale-100'
                      }`}
                    >
                      {menu.name}
                    </p>
                  </li>
                </Link>
              ))}
          </ul>
        </section>

        {showNotifications && (
          <div className={`absolute top-[14rem] left-[110%] z-30`}>
            <Notifications notifications={mockNotifications} />
          </div>
        )}

      </nav>
    </>
  );
}

export default SideBar;