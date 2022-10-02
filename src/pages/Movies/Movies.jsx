import axios from 'axios'
import { useEffect, useState } from 'react'
import { APIkey } from '../../config/key'
import { CustomPagination } from '../../components/Pagination'
import { Link } from 'react-router-dom'
import { Cards } from '../../components/Card'
import {
  createTheme,
  Tab,
  Tabs,
  ThemeProvider
} from '@mui/material'

import { ContainerSearch } from '../Search/styles'
import { CardContainer, Section } from '../Home/styles'
import { Banner, Title } from './styles'
import Poster from '../../assets/poster.webp'

export function Movies() {
  const [type, setType] = useState(0)
  const [content, setContent] = useState([])
  const [page, setPage] = useState(1)
  const [numOfPages, setNumOfPages] = useState()

  const theme = createTheme({
    palette: {
      primary: {
        main: '#2501f3'
      }
    }
  })

  const movies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${type ? 'top_rated' : 'popular'}?api_key=${APIkey}&language=pt-BR&page=${page}`
    )
    setContent(data.results)
    setNumOfPages(data.total_pages)
  }

  useEffect(() => {
    window.scroll(0, 0)
    movies()
  }, [page, type])

  return (
    <Section>
        <Banner>
          <img src={Poster} alt="Poster" />
          <h3>Filmes</h3>
        </Banner>
    <ContainerSearch>
      <ThemeProvider theme={theme}>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="inherit"
          onChange={(event, newValue) => {
            setType(newValue)
            setPage(1)
          }}
          style={{ paddingBottom: 5, marginBottom: '3rem', width: '20rem' }}
          aria-label="disabled tabs example"
        >
          <Tab style={{ width: '50%' }} label="Populares" />
          <Tab style={{ width: '50%' }} label="Top-Ranking" />
        </Tabs>
      </ThemeProvider>

      <Title style={{ color: '#2501F3'}}>
      <h2>
        Filmes {type ? 'Com a melhor avaliação' : 'Populares'}
      </h2>
      </Title>

      <CardContainer>
          {content.length > 0 &&
            content.map(movie => {
              return (
                <Link to={`/detail/movie/${movie.id}`}>
                  <Cards key={movie.id} movie={movie} />
                </Link>
              )
            })}
        </CardContainer>

      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </ContainerSearch>
    </Section>
  )
}
