import FetchAnime from '../components/FetchAnime';
import { fetchAnime } from './action';

const Anime = async () => {
  await fetchAnime(1);
  return (
    <div className='sm:p-16 py-16 px-8 flex flex-col gap-10'>
      <h2 className='text-3xl text-white font-bold'>Explore Anime</h2>
<<<<<<< HEAD
      <section>
        <FetchAnime />
=======
      <section className='grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
        {data}
>>>>>>> d7de0972d4adc4b8706596a18c76bcb1bfa91a01
      </section>
    </div>
  );
};
export default Anime;
