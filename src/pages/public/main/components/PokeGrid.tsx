import { PokemonOffsetType } from '../types/pokemon.type'
import { Box, Fade, Grid } from '@mui/material'
import { PokeCard } from './PokeCard'

export type Props = {
  data: PokemonOffsetType
}

const PokeGrid = ({ data }: Props) => {
  return (
    <Box id='PokeGrid'>
      <Grid
        container
        gap={3}
        alignItems={'center'}
        justifyContent={'center'}
      >
        {data.results.map((item) => (
          <Grid
            item
            key={item.name}
          >
            <Fade
              in={!!data}
              timeout={600}
            >
              <div>
                <PokeCard pokemonName={item.name} />
              </div>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PokeGrid