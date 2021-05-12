import { useState, useEffect, useMemo } from 'react';

export interface Pokemon {
  id: number;
  name: {
    english: string;
    japanese: string;
  };
  type: string[];
  base: Record<string, number>;
}

export default function usePokemon(): {
  pokemon: Pokemon[];
  filter: string;
  setFilter: (filter: string | ((filter: string) => string)) => void;
} {
  const [filter, setFilter] = useState('');
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch('./pokemon.json')
      .then((resp) => resp.json())
      .then((pokemon: Pokemon[]) => setAllPokemon(pokemon));
  }, []);

  //we need useMemo to avoid unnecessary calculation (see bump count)
  const pokemon = useMemo(() => {
    const lcFilter = filter.toLowerCase();
    return allPokemon
      .filter(({ name: { english } }) =>
        english.toLowerCase().includes(lcFilter)
      )
      .slice(0, 10);
  }, [filter, allPokemon]);

  return {
    pokemon,
    filter,
    setFilter,
  };
}
