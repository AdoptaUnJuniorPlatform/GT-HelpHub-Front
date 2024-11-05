import { AuthLayoutProps } from '../types/types';

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex justify-center items-center w-screen min-h-screen font-roboto not-italic px-6 md:px-12 lg:px-24 gap-8 md:gap-16">
      <section className="flex flex-col items-center lg:flex-row h-full w-full max-w-[650px]">
        <aside className="flex flex-col justify-center items-center w-full h-[80vh] lg:h-[90dvh] bg-violeta-20 flex-shrink-0 text-neutral-black p-4 md:p-6 lg:p-8
  rounded-b-[40px] lg:rounded-l-[40px] lg:rounded-b-none">
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