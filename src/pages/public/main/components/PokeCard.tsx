import {
  Box,
  Button,
  CardMedia,
  Fade,
  Grid,
  Paper,
  SxProps,
  Typography,
} from '@mui/material'
import { PokemonType } from '../types/pokemon.type'
import { PokeCardSkeleton } from './PokeSkeletons'
import { useCallback, useEffect, useState } from 'react'
import { MainStore } from '../stores/main.store'
import pokemonLogo from '../../../../assets/pokemon.svg'

type Props = {
  pokemonName: string | undefined
}

export const PokeCard = ({ pokemonName }: Props) => {
  const [data, setData] = useState<PokemonType>()

  const fetchData = useCallback(async () => {
    if (!pokemonName) return

    const result = await MainStore.getPokemonByName(pokemonName)

    setData(result)
  }, [pokemonName])

  useEffect(() => {
    fetchData()
  }, [fetchData, pokemonName])

  return data ? (
    <Fade
      in={!!data}
      timeout={600}
    >
      <Paper sx={paperCardStyle}>
        <Grid
          container
          gap={1}
        >
          <Grid
            item
            xs={12}
          >
            <CardMedia
              component='img'
              image={data.sprites.front_default || (pokemonLogo as any)}
              sx={imageStyle}
            />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Typography
              variant='subtitle1'
              textAlign='center'
              sx={titleStyle}
              noWrap
            >
              {data.name}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Box sx={boxDescriptionStyle}>
              <Typography
                textAlign='center'
                sx={descriptionStyle}
              >
                {data.description || 'A powerful pokemon!'}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Box sx={boxButtonStyle}>
              <Button
                color='primary'
                size='small'
                fullWidth
              >
                Details
              </Button>

              <Button
                color='primary'
                variant='contained'
                size='medium'
                fullWidth
              >
                ADD
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Fade>
  ) : (
    <PokeCardSkeleton />
  )
}

const paperCardStyle: SxProps = {
  padding: '20px',
  width: 200,
  height: 300,
}

const imageStyle: SxProps = {
  objectFit: 'contain',
  height: 120,
}

const titleStyle: SxProps = {
  textTransform: 'capitalize',
}

const boxDescriptionStyle: SxProps = {
  height: 70,
}
const descriptionStyle: SxProps = {
  fontSize: 12,
  textAlign: 'justify',
  overflowY: 'auto',
  height: '100%',
  paddingX: '10px',
}

const boxButtonStyle: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 2,
  gap: 2,
}