import { NotificationsProps } from "../types/types";
import AcceptedExchange from "./AcceptedExchange";
import Completed from "./Completed";
import RejectedExchange from "./RejectedExchange";
import RejectedRequest from "./RejectedRequest";
import Request from "./Request";

function Notifications({ notifications }: NotificationsProps) {

  const getContainerHeight = () => {
    switch (notifications.length) {
      case 1: return "h-[16.2rem]";
      case 2: return "h-[33.4em]";
      case 3: return "h-[50.4rem]";
      default: return "max-h-[61em] overflow-y-auto";
    }
  };

  return (
    <main className={` bg-[#FAFAFA] rounded-md shadow-lg font-roboto not-italic shrink-0 
        ${notifications.length > 0 ? 'w-[36.7rem] mx-h-[55rem] py-5 pl-2' : 'w-[26.4rem] h-[31.2rem] pt-6 px-5'} }`}
    >
      <h1 className={`text-3xl font-medium leading-6 tracking-wide pl-4 ${notifications.length > 0 ? 'mb-3 mt-2' : 'mb-8 mt-1'}`}>Notificaciones</h1>
      {notifications.length > 0 ? (
        <section className={`px-4 font-roboto not-italic ${notifications.length > 4 ? "overflow-y-auto" : "pr-[22px]" } ${getContainerHeight()}`}>
          {notifications.map((notif) => {
            if (notif.type === 'accepted') {
              return (
                <div key={notif.id}>
                  <AcceptedExchange
                    user={notif.user}
                    userImage={notif.imageUser}
                    date={notif.date}
                  />
                </div>
              );
            } else if (notif.type === 'rejectedExchange') {
              return (
                <div key={notif.id}>
                  <RejectedExchange
                    user={notif.user}
                    userImage={notif.imageUser}
                    date={notif.date}
                  />
                </div>
              );
            } else if (notif.type === 'rejectedRequest') {
              return (
                <div key={notif.id}>
                  <RejectedRequest
                    user={notif.user}
                    userImage={notif.imageUser}
                    date={notif.date}
                  />
                </div>
              );
            } else if (notif.type === 'request') {
              return (
                <div key={notif.id}>
                  <Request
                    user={notif.user}
                    userImage={notif.imageUser}
                    date={notif.date}
                  />
                </div>
              );
            } else if (notif.type === 'completed') {
              return (
                <div key={notif.id}>
                  <Completed
                    user={notif.user}
                    message={notif.message}
                    date={notif.date}
                    userImage={notif.imageUser}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center bg-white rounded-xl border-[1px] border-[#E2E2E2] h-[24.5rem] w-[24rem]">

          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="79" 
            height="79" 
            viewBox="0 0 79 79" 
            fill="none"
            className="mb-8"
          >
            <g clipPath="url(#clip0_805_7998)">
              <path d="M39.1114 5.48633C19.7564 5.48633 4.00024 19.2674 4.00024 36.2085C4.00024 53.1497 19.7564 66.9308 39.1114 66.9308C42.7325 66.9266 46.3359 66.4245 49.8202 65.4385L61.9555 73.163C62.2868 73.3755 62.6692 73.4951 63.0625 73.5091C63.4559 73.5231 63.8458 73.431 64.1913 73.2425C64.5369 73.054 64.8254 72.7761 65.0266 72.4378C65.2278 72.0995 65.3343 71.7133 65.335 71.3197V56.5511C68.0807 53.917 70.2719 50.7603 71.7793 47.2667C73.2868 43.7732 74.0802 40.0133 74.1128 36.2085C74.2225 19.2674 58.4664 5.48633 39.1114 5.48633ZM61.6922 54.0055C61.4716 54.2101 61.2954 54.4579 61.1746 54.7335C61.0538 55.0091 60.9909 55.3065 60.99 55.6074V67.3258L51.3783 61.2033C51.1102 61.0338 50.8085 60.9245 50.4941 60.8828C50.1797 60.8411 49.8599 60.8681 49.5569 60.9619C46.1747 62.0124 42.653 62.545 39.1114 62.5419C22.1702 62.5419 8.38913 50.7358 8.38913 36.2085C8.38913 21.6813 22.1702 9.87522 39.1114 9.87522C56.0525 9.87522 69.8336 21.6813 69.8336 36.2085C69.7836 39.5772 69.034 42.8987 67.6325 45.9623C66.231 49.026 64.2082 51.7649 61.6922 54.0055Z" fill="black"/>
              <path d="M39.1949 45.271C39.7769 45.271 40.3351 45.0398 40.7466 44.6283C41.1581 44.2167 41.3893 43.6586 41.3893 43.0766V18.6085C41.3893 18.0265 41.1581 17.4683 40.7466 17.0568C40.3351 16.6453 39.7769 16.4141 39.1949 16.4141C38.6129 16.4141 38.0547 16.6453 37.6432 17.0568C37.2316 17.4683 37.0004 18.0265 37.0004 18.6085V43.0327C36.9946 43.3245 37.0471 43.6146 37.1547 43.8859C37.2624 44.1573 37.4231 44.4044 37.6274 44.6128C37.8318 44.8213 38.0757 44.9869 38.3448 45.0999C38.614 45.2129 38.903 45.2711 39.1949 45.271Z" fill="black"/>
              <path d="M39.9184 55.6732C41.5303 55.6732 42.837 54.3665 42.837 52.7546C42.837 51.1426 41.5303 49.8359 39.9184 49.8359C38.3065 49.8359 36.9998 51.1426 36.9998 52.7546C36.9998 54.3665 38.3065 55.6732 39.9184 55.6732Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_805_7998">
                <rect width="79" height="79" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <h2 className="text-xl font-medium leading-normal tracking-wide mb-2">Aún no hay notifications</h2>
          <div className="flex flex-col justify-center items-center w-52">
            <h3 className="text-black text-base font-normal leading-normal tracking-wide text-center">
              De momento no tienes ninguna notificación.
            </h3>
          </div>
        </div>
      )}
    </main>
  );
}

export default Notifications;