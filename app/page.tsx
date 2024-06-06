import FetchAnime from '../components/FetchAnime';
import { fetchAnime } from './action';

const Anime = async () => {
  await fetchAnime(1);
  return (
    <div className='sm:p-16 py-16 px-8 flex flex-col gap-10'>
      <h2 className='text-3xl text-white font-bold'>Explore Anime</h2>
      <section>
        <FetchAnime />
      </section>
    </div>
  );
};
export default Anime;
