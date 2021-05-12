import React, { useCallback } from 'react';
import './App.css';
import { Box, Image } from '@fower/react';
import { styled } from '@fower/styled';
import usePokemon from './usePokemon'; // our own custom hook

const Input = styled('input');

function App() {
  const { filter, setFilter, pokemon } = usePokemon();

  const onSetFilter = useCallback(
    (evt) => setFilter(evt.target.value),
    [setFilter]
  );

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
        onChange={onSetFilter}
      />
      <Box mt-10 grid gridTemplateColumns-2 gap-10>
        {pokemon.map((pokemon) => (
          <Box
            key={pokemon.id}
            text3XL
            m-10
            p-10
            border-1
            borderGray500
            roundedXL
            grid
            gridTemplateColumns-2
            gap-10>
            <Image
              rounded2XL
              src={`https://dummyimage.com/320x200/a1a1a1/ffffff.jpg&text=No+image+provided`}
              w='100%'
            />
            <Box textLG>{pokemon.name.english}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default App;
