'use server';

import AnimeCard, { AnimeProp } from '@/components/AnimeCard';

export const fetchAnime = async (page: number) => {
  const ecchi = `https://shikimori.one/api/animes?page=${page}&order=name&censored=false&genre=9`;
  const hentai = `https://shikimori.one/api/animes?page=${page}&orderl=name&censored=false&genre=12`;

  const res = await fetch(ecchi);
  const data = await res.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
