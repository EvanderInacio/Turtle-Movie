import { APIkey } from '../../config/key'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Cards } from '../../components/Card'
import { Section, Title, CardContainer } from '../Home/styles'

export function Movies() {
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${APIkey}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    )
      .then(res => res.json())
      .then(data => setTrendingMovies(data.results))
  }, [])

  return (
    <>
      <Section>
        <Title>
          <span>Filmes</span>
        </Title>
        <CardContainer>
          {trendingMovies.length > 0 &&
            trendingMovies.map(movie => {
              return (
                <Link key={movie.id} to={`/detail/movie/${movie.id}`}>
                  <Cards movie={movie} />
                </Link>
              )
            })}
        </CardContainer>
      </Section>
    </>
  )
}
