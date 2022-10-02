import axios from 'axios'
import { useEffect, useState } from 'react'
import { APIkey } from '../../config/key'
import { CustomPagination } from '../../components/Pagination'
import {
  Button,
  createTheme,
  Tab,
  Tabs,
  TextField,
  ThemeProvider
} from '@mui/material'
import { ContainerSearch, ContentSearch } from './styles'
import { FaSearch } from 'react-icons/fa'
import { CardContainer } from '../Home/styles'
import { Link } from 'react-router-dom'
import { Cards } from '../../components/Card'
import { Banner } from '../Movies/styles'
import Poster from '../../assets/persons.jpg'

export function Search() {
  const [type, setType] = useState(0)
  const [content, setContent] = useState([])
  const [searchText, setSearchText] = useState('')
  const [page, setPage] = useState(1)
  const [numOfPages, setNumOfPages] = useState()

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${
        type ? 'tv' : 'movie'
      }?api_key=${APIkey}&language=pt-BR&query=${searchText}&page=${page}&include_adult=false`
    )
    setContent(data.results)
    setNumOfPages(data.total_pages)
  }

  useEffect(() => {
    window.scroll(0, 0)
    fetchSearch()
  }, [page, type])

  const theme = createTheme({
    palette: {
      primary: {
        main: '#2501f3'
      }
    }
  })

  return (
    <ContainerSearch>
      <Banner>
        <img src={Poster} alt="Poster" />
        <h3>Pesquisa</h3>
      </Banner>
      <ThemeProvider theme={theme}>
        <ContentSearch>
          <TextField
            style={{ flex: 1, marginTop: '3rem' }}
            className="search-box"
            label="Busque: Filmes - Series"
            variant="filled"
            onChange={e => setSearchText(e.target.value)}
          />

          <Button
            variant="contained"
            className="btn-search"
            onClick={fetchSearch}
          >
            <FaSearch />
          </Button>
        </ContentSearch>

        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            setType(newValue)
            setPage(1)
          }}
          style={{ paddingBottom: 5, marginBottom: '3rem' }}
          aria-label="disabled tabs example"
        >
          <Tab style={{ width: '50%' }} label="Filmes" />
          <Tab style={{ width: '50%' }} label="Series" />
          {/* <Tab style={{ width: '30%' }} label="Search Persons" /> */}
        </Tabs>
      </ThemeProvider>

      {
        <CardContainer>
          {content &&
            content.map(movie => {
              return (
                <>
                  <Link to={`/detail/${type ? 'tv' : 'movie'}/${movie.id}`}>
                    <Cards
                      key={movie.id}
                      movie={movie}
                    />
                  </Link>
                </>
              )
            })}
        </CardContainer>
      }

      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </ContainerSearch>
  )
}
