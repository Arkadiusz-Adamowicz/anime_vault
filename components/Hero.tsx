'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

function Hero() {
  const currentPage = usePathname();

  return (
    <header className='bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0'>
      <div className='flex-1 flex flex-col gap-10'>
        <Image
          src='./logo.svg'
          alt='logo'
          width={101}
          height={96}
          className='object-contain hidden'
        />
        <h1 className='sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]'>
          Explore The <span className='red-gradient'>Diverse Realms</span> of
          {currentPage === '/hentai' ? ' Hentai' : ' Anime'}
        </h1>
      </div>
      <div className='lg:flex-1 relative w-full h-[55vh] justify-center'>
        <Image
          src={currentPage === '/hentai' ? '/hentai.png' : '/anime.png'}
          alt='anime'
          fill
          className='object-contain'
        />
      </div>
    </header>
  );
}

export default Hero;
