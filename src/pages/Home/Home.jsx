import { APIkey } from '../../config/key'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Slider } from '../../components/Slider'
import { Cards } from '../../components/Card'
import { Section, Title, CardContainer } from './styles'

export function Home() {
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${APIkey}&language=pt-BR`
    )
      .then(res => res.json())
      .then(data => setTrendingMovies(data.results))
  }, [])

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
                <Link key={movie.id} to={`/detail/${movie.media_type}/${movie.id}`}>
                  <Cards movie={movie} />
                </Link>
              )
            })}
        </CardContainer>
      </Section>
    </>
  )
}
