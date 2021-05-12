import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { Box } from '@fower/react';
import { styled } from '@fower/styled';
import usePokemon from './usePokemon'; // our own custom hook

const Input = styled('input');

function App() {
  const [count, setCount] = useState(1);
  const { filter, setFilter, pokemon } = usePokemon();

  useEffect(() => {
    console.log('setFilter change');
  }, [setFilter]);

  const onSetFilter = useCallback(
    (evt) => setFilter(evt.target.value),
    [setFilter]
  );

  return (
    <Box p-10 maxW-1200 m-auto>
      <button onClick={() => setCount(count + 1)}>bump count = {count}</button>
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
