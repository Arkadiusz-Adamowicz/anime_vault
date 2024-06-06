'use server';

import AnimeCard, { AnimeProp } from '@/components/AnimeCard';

export const fetchAnime = async (page: number) => {
<<<<<<< HEAD
  const ecchi = `https://shikimori.one/api/animes?page=${page}&order=name&censored=false&genre=9`;
  const hentai = `https://shikimori.one/api/animes?page=${page}&order=name&censored=false&genre=12`;
=======
  const ecchi = `https://shikimori.one/api/animes?page=${page}&limit=12&order=name&censored=false&genre=9`;
  const hentai = `https://shikimori.one/api/animes?page=${page}&limit=12&order=name&censored=false&genre=12`;
>>>>>>> d7de0972d4adc4b8706596a18c76bcb1bfa91a01

  const res = await fetch(ecchi);
  const data = await res.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
