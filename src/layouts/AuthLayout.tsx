import { useLocation } from 'react-router-dom';
import { AuthLayoutProps } from '../types/types';

function AuthLayout({ children }: AuthLayoutProps) {
  const location = useLocation();
  const isRegister = location.pathname === '/register'
  return (
    <main className="flex justify-center items-center w-screen min-h-screen font-roboto not-italic px-4 md:px-12 lg:px-16 gap-8 md:gap-16">
      <section className="flex flex-col items-center sm:flex-col lg:flex-row h-full w-full max-w-[650px]">
        {isRegister && <img src="../../src/assets/Background.svg" className="absolute h-dvh w-screen right-0 opacity-10"/>}
        <aside className={`relative flex flex-col justify-center items-center w-full h-[80vh] lg:h-[90dvh] flex-shrink-0  p-2 sm:p-4 md:p-6 lg:p-8
  rounded-b-[40px] lg:rounded-l-[40px] lg:rounded-b-none ${isRegister ? ' bg-violeta-100 text-neutral-gray z-50' : 'bg-violeta-20 text-neutral-black'}`}>
          {children[0]}
        </aside>
      </section>
      <section className="relative flex flex-col justify-center items-center h-[90vh] w-full ">
        {children[1]}
      </section>
    </main>
  );
}

export default AuthLayout;