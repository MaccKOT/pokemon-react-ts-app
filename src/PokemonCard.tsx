import React from 'react';
import { Box, Image } from '@fower/react';
import { Pokemon } from './usePokemon';

const PokemonCard: React.FunctionComponent<Pokemon> = ({
  name,
  type,
  base,
}) => {
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
      gap-10>
      <Image
        rounded2XL
        src={IMAGE_URL + name.english.toLowerCase() + '.jpg'}
        w='100%'
      />
      <Box>
        <Box textLG fontBold>
          {name.english}
        </Box>
        <Box textLG fontBold>
          {name.japanese}
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
