import { APIkey } from '../../config/key'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Slider } from '../../components/Slider'
import { Cards } from '../../components/Card'
import { Section, Title, CardContainer } from './styles'
import { CustomPagination } from '../../components/Pagination'

export function Home() {
  const [page, setPage] = useState(1)
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    window.scroll(0, 0)
    getFetch()
  }, [page])

  const getFetch = () => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${APIkey}&language=pt-BR&page=${page}`
    )
      .then(response => response.json())
      .then(data => setTrendingMovies(data.results))
  }

  return (
    <>
      <Slider />
      <Section>
        <Title>
          <span>Filmes e Series</span> em alta da semana
        </Title>
        <CardContainer>
          {trendingMovies.length > 0 &&
            trendingMovies.map(movie => {
              return (
                <Link
                  key={movie.id}
                  to={`/detail/${movie.media_type}/${movie.id}`}
                >
                  <Cards movie={movie} />
                </Link>
              )
            })}
        </CardContainer>

        <CustomPagination setPage={setPage} />
      </Section>
    </>
  )
}
