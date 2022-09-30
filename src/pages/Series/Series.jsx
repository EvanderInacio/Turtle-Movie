import axios from 'axios'
import { APIkey } from '../../config/key'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Cards } from '../../components/Card'
import { Section, Title, CardContainer } from '../Home/styles'
import { CustomPagination } from '../../components/Pagination'

export function Series() {
  const [trendingMovies, setTrendingMovies] = useState([])
  const [numOfPages, setNumOfPages] = useState();
  const [page, setPage] = useState(1);

  const series = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${APIkey}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
    setTrendingMovies(data.results)
    setNumOfPages(data.total_pages)
  }

  useEffect(() => {
    window.scroll(0, 0);
    series()
  }, [page])

  return (
    <>
      <Section>
        <Title>
          <span>Series</span>
        </Title>
        <CardContainer>
          {trendingMovies.length > 0 &&
            trendingMovies.map(movie => {
              return (
                <Link to={`/detail/tv/${movie.id}`}>
                  <Cards key={movie.id} movie={movie} />
                </Link>
              )
            })}
        </CardContainer>

        {numOfPages > 1 && (
          <CustomPagination setPage={setPage} numOfPages={numOfPages} />
        )}
      </Section>
    </>
  )
}
