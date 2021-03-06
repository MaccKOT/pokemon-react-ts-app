import React, { useCallback } from 'react';
import './App.css';
import { Box } from '@fower/react';
import { styled } from '@fower/styled';
import usePokemon from './usePokemon'; // our own custom hook
import PokemonCard from './PokemonCard';

const Input = styled('input');

function App() {
  const { filter, setFilter, pokemon, selectPokemon, selected } = usePokemon();

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
      <Box
        mt-10
        grid
        gridTemplateColumns-2--md
        gridTemplateColumns-1--sm
        gap-10>
        {pokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            {...pokemon}
            selected={selected.has(pokemon.name.english)}
            onSelected={selectPokemon}
          />
        ))}
      </Box>
    </Box>
  );
}

export default App;
