import { AuthLayoutProps } from '../types/types';

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex justify-center items-center w-screen min-h-screen font-roboto not-italic px-24 gap-28">
      <section className="flex flex-col items-center lg:flex-row max-w-5xl h-full">
        <aside className="flex flex-col justify-center items-center w-full lg:w-[650px] h-[90dvh] bg-violeta-20 flex-shrink-0 text-neutral-black p-4 
  rounded-b-[40px] lg:rounded-l-[40px] lg:rounded-b-none">
          {children[0]}
        </aside>
      </section>
      <section className="flex flex-col justify-center items-center h-[90vh] w-full ">
        {children[1]}
      </section>
    </main>
  );
}

export default AuthLayout;