'use server';

import AnimeCard, { AnimeProp } from '@/components/AnimeCard';

export const fetchAnime = async (page: number) => {
  const anime = `https://shikimori.one/api/animes?page=${page}&limit=10&order=name&censored=false&genre=9`;

  const res = await fetch(anime);
  const data = await res.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};

export const fetchHentai = async (page: number) => {
  const hentai = `https://shikimori.one/api/animes?page=${page}&limit=10&orderl=name&censored=false&genre=12`;

  const res = await fetch(hentai);
  const data = await res.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
