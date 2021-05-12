import React, { useState, useEffect } from 'react';
import './App.css';
import { Box } from '@fower/react';
import { styled } from '@fower/styled';

interface Pokemon {
  id: number;
  name: {
    english: string;
    japanese: string;
  };
  type: string[];
  base: Record<string, number>;
}

const Input = styled('input');

function App() {
  const [filter, setFilter] = useState('');
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch('./pokemon.json')
      .then((resp) => resp.json())
      .then((pokemon: Pokemon[]) => setAllPokemon(pokemon));
  }, []);

  const lcFilter = filter.toLowerCase();
  const pokemon = allPokemon
    .filter(({ name: { english } }) => english.toLowerCase().includes(lcFilter))
    .slice(0, 10);

  return (
    <Box p-10 maxW-1200 m-auto>
      <Input
        p-5
        text4XL
        border-1
        rounded
        borderGray500
        w='100%'
        value={filter}
        onChange={(evt) => setFilter(evt.target.value)}
      />
      <Box>
        {pokemon.map((pokemon) => (
          <Box key={pokemon.id} text3XL>
            {pokemon.name.english}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default App;
