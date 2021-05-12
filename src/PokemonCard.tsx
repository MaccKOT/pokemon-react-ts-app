import React from 'react';
import { Box, Image } from '@fower/react';
import { styled } from '@fower/styled';
import { addAtom } from '@fower/core';
import { Pokemon } from './usePokemon';

//styled components
const Button = styled('button');
const PillButton: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    selected: boolean;
  }
> = ({ onClick, children, selected }) => (
  <Button
    onClick={onClick}
    p-10
    w='80%'
    white={selected}
    bgBlue600={selected}
    border-1={!selected}
    borderBlue500={!selected}
    roundedFull>
    {children}
  </Button>
);

//add own atom classes
addAtom('grid-30-70', {
  gridTemplateColumns: '30% 70%',
});
addAtom('grid-70-30', {
  gridTemplateColumns: '70% 30%',
});

const PokemonCard: React.FunctionComponent<
  Pokemon & {
    selected: boolean;
    onSelected: (name: string) => void;
  }
> = ({ name, type, base, selected, onSelected }) => {
  // const DUMMY_URL = `https://dummyimage.com/320x200/a1a1a1/ffffff.jpg&text=No+image+provided`;

  const IMAGE_URL = `https://raw.githubusercontent.com/jherr/fower-react-pokemon/master/public/pokemon/`;

  return (
    <Box
      text3XL
      m-10
      p-10
      border-1
      borderGray500
      roundedXL
      grid
      gridTemplateColumns-2
      gap-10
      grid-30-70>
      <Image
        rounded2XL
        src={IMAGE_URL + name.english.toLowerCase() + '.jpg'}
        w='100%'
      />
      <Box>
        <Box grid gridTemplateColumns-2 gap-10>
          <Box>
            <Box textLG fontBold>
              {name.english}
            </Box>
            <Box textLG fontBold>
              {name.japanese}
            </Box>
          </Box>
          <Box>
            <PillButton
              onClick={() => onSelected(name.english)}
              selected={selected}>
              {selected ? 'Selected' : 'Select'}
            </PillButton>
          </Box>
        </Box>

        <Box textSM fontBold mt-10>
          {type.join(', ')}
        </Box>
        <Box grid gridTemplateColumns-2 gap-10 textSM ml-20 mt-15>
          {Object.keys(base).map((k) => (
            <React.Fragment key={k}>
              <Box>{k}</Box>
              <Box>{base[k]}</Box>
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PokemonCard;
