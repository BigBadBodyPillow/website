'use client';
import ContactMe from '@/components/contact';
import Socials from '@/components/socials';
import { Boxes } from '@/components/ui/background-boxes';
import { Analytics } from '@vercel/analytics/react';
// import '../../public/oneko.js';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/oneko.js';
    script.async = false;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []); // Provide an empty array as the second argument

  return (
    <div className="application z-20">
      <div className=" min-h-screen relative w-full overflow-hidden bg-stone-950 flex flex-col items-center justify-center rounded-lg">
        <div className=" absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <div className="rainbow-line w-screen absolute top-0 z-20 rounded-none"></div>
        <div className="not-container ">
          <div className="hero flex flex-col items-center justify-center w-fit p-[1.5rem]">
            <h1 className="pointer-events-none me z-20 text-[10rem]">
              sadness
            </h1>
            <h2 className="cursor-pointer welcome relative z-20 text-[1.5rem] w-full flex justify-center">
              <span className="hyphen">-</span>
              Welcome to my portfolio
              <span className="hyphen">-</span>
            </h2>
            <Socials />
          </div>
        </div>
        <div className="backthing absolute z-0  pointer-events-none  rounded-full size-[600px]">
          d
        </div>
        <ContactMe />
        <Boxes />
      </div>
      <Analytics />
    </div>
  );
}
