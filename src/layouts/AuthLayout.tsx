import { AuthLayoutProps } from '../types/types';

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex justify-center items-center w-screen min-h-screen">
      <section className="flex flex-col lg:flex-row lg:justify-around w-8/12 lg:h-auto h-full">
        <aside className="flex justify-center items-center w-full lg:w-[650px] lg:h-[90vh] sm:h-[95vh] bg-violeta-20 flex-shrink-0 text-neutral-black p-4 lg:p-0 
  rounded-b-[40px] lg:rounded-l-[40px] lg:rounded-b-none">
          {children[0]}
        </aside>
      </section>
      <section className="flex flex-col items-center justify-center pt-9 lg:ml-28 w-full lg:w-10/12 lg:items-start lg:justify-between">
        {children[1]}
      </section>
    </main>
  );
}

export default AuthLayout;