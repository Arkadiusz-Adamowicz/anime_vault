'use server';

import AnimeCard, { AnimeProp } from '@/components/AnimeCard';

export const fetchAnime = async (page: number) => {
  const ecchi = `https://shikimori.one/api/animes?page=${page}&limit=8&order=name&censored=false&genre=9`;
  const hentai = `https://shikimori.one/api/animes?page=${page}&limit=8&order=name&censored=false&genre=12`;
  const latest = `https://shikimori.one/api/animes?page=${page}&status=latest&limit=8&order=name`;

  const res = await fetch(ecchi);
  const data = await res.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
